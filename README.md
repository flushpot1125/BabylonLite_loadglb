# BabylonLite-HelloWorld
Babylon Liteを使ってglbモデルを読み込むプロジェクトです。  

読み込んだ後でglbファイルのpositionを変更する処理も入れています。

# Usage

```bash
$ git clone https://github.com/flushpot1125/BabylonLite_loadglb
```

Git clone、またはプロジェクト全体をzipでダウンロードします。 

モジュールをインストールして、npm run devで実行します。  

```bash
$ npm i
$ npm run dev
```

"http://localhost:5173" のようにURLが表示されるので、ブラウザでアクセスします。  

# パフォーマンス測定方法

Chrome/Edgeブラウザの「開発者ツール」を開いて、「Performance」を選択します。録画ボタンを押してからF5でリロードし、数秒経ってから止めると、読み込み時の時間や読み込みデータ量を確認できます。  

