/***********************
* Adobe Edge コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var balls = ["redBall", "blueBall", "greenBall"];
         
         function fall() {
           var timeout = Math.random() * 1000,
               ballIndex = Math.floor(Math.random() * balls.length);
               ball = sym.createChildSymbol(balls[ballIndex], "RoundRect");
           ball.play();
           setTimeout(fall, timeout);
         }
         setTimeout(fall, 100);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hoge'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.deleteSymbol();

      });
      //Edge binding end

   })("redBall");
   //Edge symbol end:'redBall'

   //=========================================================
   
   //Edge symbol: 'redBall_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.deleteSymbol();

      });
         //Edge binding end

      })("blueBall");
   //Edge symbol end:'blueBall'

   //=========================================================
   
   //Edge symbol: 'blueBall_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.deleteSymbol();

      });
         //Edge binding end

      })("greenBall");
   //Edge symbol end:'greenBall'

})(jQuery, AdobeEdge, "EDGE-29296295");