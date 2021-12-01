# マークダウンからissueを一括で作るやつ

### dependency
[GitHub CLI](https://github.com/cli/cli)

### Usage

`node script.js {markdown path} {repo name (optional)}`


- ISSUEは `---` で分割されます。
- 見出し1はissueのタイトルとして扱われます。
- `options: ~~` で始まる行はghにoptionとして渡されます。
- それ以外の部分をbodyとして渡します。

### [マークダウンのサンプル](https://github.com/kawokas/bulk-issue-creator/blob/master/example.md)

```markdown
# issue test 1
options: -a @me

これはissueの中身です

---

# issue test 2
options: -a @me

これはissueの中身です
## これはissueの中身の見出しだよ
aaaaa  
bbbbb  

- [ ] チェックボックス

|テーブル|テスト|
|-|-|
|テーブル|だよ|
```


### オプションは下記を参照してください
SEE: https://cli.github.com/manual/gh_issue_create
