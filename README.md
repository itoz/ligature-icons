# Create ligature icons

事前にインストールが必要なツール(fontforgeなど)があるのでリンク先参照。  

[grunt-webfont]:https://www.npmjs.com/package/grunt-webfont

```
$npm i
```

## [step1] svgファイルの設置

 (design/*.sketchなどをもとに) svgファイルを、 `src/svg/`フォルダに設置。

## [step2] フォントをビルド

```
$npm start
```

## [step3] 確認する

`dist/fonts/ligature-icons/_sample.html`


##[step4] 任意のプロジェクトに設置する

1. `dist/fonts/ligature-icons/*` を任意のプロジェクトにコピー
1. `dist/scss/*.scss` を任意のプロジェクトにコピーしソース内のパスを1に変更する
1. 2のscssをpartialとして他のscssから読み込んでビルドされるように設定。


### コード記述例


ex) githubアイコンを表示したい場合
```
<i class="ligature-icons">github</i>
```
