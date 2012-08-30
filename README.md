#Blog用サンプル

[StartEdge](http://roothybrid7.github.com/edgeBlog/sample/startEdge/web/startedge.html)
[SymbolBalls](http://roothybrid7.github.com/edgeBlog/sample/symbolBalls/web/symbolballs.html)

##StartEdge
四角形を四隅に動かすのを繰り返すアニメーション

1. 再生ボタンをクリック
2. 真ん中から登場
3. 左上に回転しながら移動
4. 右上に四角形幅を1.5倍しながら移動[Easing: EaseOut_Exponental]
5. 右下に移動[Easing: Swing]
6. 左下に四角形幅を1倍に戻しながら移動[Easing: EaseIn_Exponental]
7. 左上に移動[Easing: Linear]
8. 番号に回転しながら近づき、カウントアップ
9. 左上に回転しながら戻る
10. 4.に戻る

###Tips

- タイムラインの再生について
    - TimelineはSymbol毎に定義されています。
    - Timelineは自動再生するかしないかを選択できます。
        - 自動再生を有効にした場合
            - Stage(ルートSymbol)の場合は起動時に再生が始まります。
            - それ以外のSymbolのTimelineの再生は、親Symbolに追加した位置のPlayheadの時間から開始されます。
                - SymbolのTimelineは親Symbolとは独立して定義できるので、自動再生はOFFにして作成することが多いでしょう。
        - 自動再生を無効にした場合
            - 親SymbolのTimelineに再生の設定を行うか
            - JavascriptのTriggerやEventsの関数で、Edge APIを使って再生します。

- ツールバーの四角形や文字、画像を配置する場合の注意点
    - 自動キーフレームモード(後述)をOFF: Timeline上にキーフレームが自動的に記録されてしまうためです。

- キーフレームの記録について
    - 自動キーフレームモード: Stage上のグラフィカルな操作やプロパティパネルでの編集をTimelineに反映
        - ※Stage上に単に配置するだけの場合は、Timelineに記録されないようにOFFにすることをおすすめします。
    - 自動トランジションモード: キーフレーム間の段階的な遷移を作成
        - ※Timelineに記録する必要があるので、自動キーフレームモードをONにする必要あり)
        - PlayHeadをずらしていって、キーフレーム間の変化量を緩やかなトランジションとして記録する
            - キーフレームを点として、その点と点を結んだ変化量を記録する
    - Pin: 移動元と移動先の2点にキーフレームを作成
        - ※自動キーフレームモードと自動トランジションモードを使用するため、両方ともONにする
        - 自動トランジションモードのみをONにしたときとの違いは、
        Pinの場合は移動に特化しているため2点のキーフレームを同時に記録できる。
        対して自動キーフレームモードのみの場合は、1点ずつ記録するので2点以上の段階的な変化を記録するときに使用します。
        - トランジション(遷移)の2点間の移動のキーフレームを記録するのは、Pinを使ってD&Dで記録するのが簡単

- シンボル変数について
    - シンボルに値を保存できて、後でアクセスできる仕組みです。
    - 保存できる値はなんでもよく、オブジェクトや関数なども保存できます。

###詳細
ボタンクリックによりアニメーションを開始するので、Stageの自動再生はOFFで、
ボタンクリックイベントによって、Edge APIの `sym.play()` を使ってアニメーションの再生を開始します。

Timelineの編集で、Pinによる記録は、四隅の移動に使っています。
自動トランジションモードは、番号のカウントアップ時のアニメーションに使っています。

カウントの保存や取得にシンボル変数を使っています。
画面上の数値書き換えは、jQuery風に `html()` で書き換えることができます。

`sym.play("loop")` とラベルを使って四隅の移動アニメーションを繰り返し再生しています。


##SymbolBalls
Symbolとして作成したいろんなカラーのボールを落とす

- ボールを落とす図形は、左上から左右に移動するアニメーションを繰り返す。
- 図形アニメーションが動作している間、赤・緑・青のボール図形のいずれかのSymbolを作成し、下に向かって落とす。
- ボールを落とす図形をクリックすると、図形アニメーションが停止し、ボールのSymbol作成も停止する。

###Tips

- ボールを落とす図形の繰り返しアニメーション
    - 今回は、一連の左右に移動するアニメーションが完了したあとに再度再生するため、Stageの`complete`イベントのアクションの中で`sym.play(0)`を呼び出しています。
- Symbolの作成について
    - Symbol化したい要素を一つまたは複数選択して変換することで作成できます。
    - Symbol変換後、Symbolのdivコンテナの中に選択した要素が入り、Timelineが一つ作成されます。
- Edge AnimateのEventに関して
    - Symbolイベント
        - creationComplete
        Stageが作成され初期化が完了した後に発火されます。

        ここで、必要な関数を定義しています。
        シンボル変数に関数を設定していますが、変数の値は何でもOKなので問題ありません。
        主に別イベントで関数を実行したい場合に使います。

    - DOMイベント
        - compositionReady
        Edgeコンポジションの再生準備が整ったときに発火されます。

        `creationComplete`で定義して関数を使って、ボールを落とすアニメーションをここで実行します。

SymbolアニメーションAPI

sym.play(position, executeTriggers)

    Timelineを再生します。
    引数のpositionなしの場合、Playheadの位置から再生します。PlayheadがTimelineの最後にある場合は、はじめから再生を開始します。
    positionはラベルも指定できます。これによって、繰り返しアニメーションを再生したり、任意の位置に飛んで特定のアニメーションを再生したりすることが可能です。
    executeTriggersは、再生開始位置にあるTriggerを実行するかしないかを設定できるようです。

sym.stop(position)

    Timelineを停止します。
    引数のpositionなしの場合、Playheadの位置で停止します。
    `play`の場合と同じく、positionはラベルも指定できます。

sym.isPlaying()

    Timelineが、再生中かどうかを確認することが可能です。
    サンプルでは、Stageのボールを落とす要素アニメーションの再生有無によってボールを落とすアニメーションを実行するのに使いました。

sym.getPosition()

    Timeline上のPlayheadの位置がどこにあるかを確認する場合に使います。

sym.getDuration()

    Timelineの長さ(時間)を取得します。

sym.getLabelPosition(aLabel)

    Timeline上に設定したラベルの位置を取得します。
    ラベル位置の時間が取得できるので、時間計算などにも使用できます。

Symbolの作成/削除に関して

`sym.createChildSymbol(symbolName, parentElementName, index)`

   Symbolインスタンスを作成し、指定した親要素に追加します。
   symbolには、定義したSymbol(ライブラリパネルのシンボル)の名前を指定します。
   parentElementNameには、親となるDOM要素を指定します。SymbolのコンテナもDOM要素なのでシンボルの中に指定することも可能です。
   サンプルでは、落下するボールのSymbolインスタンスを作成するのに使いました。

`sym.deleteSymbol(options)`

   Symbolインスタンスを削除します。サンプルでは、ボールアニメーションの再生が完了した時に自分自身を削除する時に使用しています。
