# Babylon　Lite　： Loading glb model　
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

# 参考 

下記のモジュールをインストールして、main.tsを以下のコードと置き換えたプロジェクトを作ると、Babylon.jsで同様の処理を実行できるので、パフォーマンスの比較が可能です。

```bash
npm i @babylonjs/core @babylonjs/loaders
```

```typescript
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import '@babylonjs/loaders/glTF';

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

const engine = new Engine(canvas, true);

const createScene = (): Scene => {
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(5, 5, 5), scene);
    camera.attachControl(canvas, true);

    scene.onBeforeRenderObservable.add(() => {
    camera.alpha += 0.005; // 回転速度（調整可能）
    });

    const light = new HemisphericLight('light', new Vector3(0, 1, 0),scene);
    light.intensity = 10;
    SceneLoader.ImportMesh('', './assets/', 'dram.glb', scene);

    return scene;
};

const scene = createScene();
engine.runRenderLoop(() => { scene.render();});

window.addEventListener('resize', () => {
    engine.resize();
});

```