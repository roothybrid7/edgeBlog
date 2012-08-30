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
sym.getVariable("updateDrop")();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /**
          * Ball symbol names.
          * @type {Array.<string>}
          */
         var balls = ["redBall", "blueBall", "greenBall"];
         
         /**
          * Drop a ball by random.
          */
         function drop() {
           var ballIndex = Math.floor(Math.random() * 9999) % balls.length;
               ball = sym.createChildSymbol(balls[ballIndex], "RoundRect");
           ball.play();
         }
         
         function updateDrop() {
           // sym.getLabelPosition("moveEnd") OR sym.getDuration()
           var timeout = Math.random() * sym.getLabelPosition("moveEnd") / 4;
           if (sym.isPlaying()) {
             drop();
           }
           setTimeout(updateDrop, timeout);
         }
         
         sym.setVariable("updateDrop", updateDrop);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         if (sym.isPlaying()) {
           sym.stop();
         } else {
           sym.play();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hoge'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Ellipse").css({position: "absolute"});
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.deleteSymbol();

      });
      //Edge binding end

   })("redBall");
   //Edge symbol end:'redBall'

   //=========================================================
   
   //Edge symbol: 'redBall_1'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Ellipse").css({position: "absolute"});

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.deleteSymbol();

      });
      //Edge binding end

      })("blueBall");
   //Edge symbol end:'blueBall'

   //=========================================================
   
   //Edge symbol: 'blueBall_1'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Ellipse").css({position: "absolute"});
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.deleteSymbol();

      });
      //Edge binding end

      })("greenBall");
   //Edge symbol end:'greenBall'

})(jQuery, AdobeEdge, "EDGE-29296295");