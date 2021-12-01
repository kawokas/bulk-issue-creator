const path = require('path')
const process = require('process')
const fs = require('fs')
const { execSync } = require('child_process')

const mdFile = process.argv[2]
const repo = process.argv[3]

fs.statSync(mdFile);

const md = fs.readFileSync(mdFile,'utf8')

const issues = md.split(/^--*$/gm)

const args = issues.map((issue) => {
  const matchedTitle = issue.match(/^\s*#\s.*$/m)[0]
  const title = matchedTitle.replace(/\r?\n/g, '').replace(/^#\s*/, '')
  const matchedOptions = issue.match(/^\s*options:\s.*$/m)[0]
  const options = matchedOptions.replace(/\r?\n/g, '').replace(/^options:\s*/, '')
  const body = issue.replace(matchedTitle, '').replace(matchedOptions, '').replace(/^(\r?\n)*/, '')
  return { title, body, options }
})

args.forEach((arg) => {
  const {title, body, options} = arg
  let command = `gh issue create --title "${title}" --body "${body}" ${options}`
  if(repo) {
    command + ` -r ${repo}`
  }
  const out = execSync(command)
  console.log(out.toString())
})
