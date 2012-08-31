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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getVariable("switchPose")("sitting");
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getVariable("switchPose")("running");
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getVariable("switchPose")("standup");
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getVariable("switchPose")("standing");
      });
      //Edge binding end
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play(0);
      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /**
          * Switch cat pose
          * @param {string} label A edge timeline label.
          */
         function switchPose(label) {
           sym.getSymbol("blackcatSprite").stop(label);
           sym.$("Text").html(label);
         }
         
         sym.setVariable("switchPose", switchPose);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button}", "click", function(sym, e) {
         var catRunAction = sym.getSymbol("catRunAction");
         if (!catRunAction.isPlaying()) {
           catRunAction.play(0);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getSymbol("catRunAction").getSymbol("blackcatSprite").play("waiting");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'catAnimation_black'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("waiting");

      });
      //Edge binding end

   })("blackcatSprite");
   //Edge symbol end:'blackcatSprite'

   //=========================================================
   
   //Edge symbol: 'catAnimattion'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.getSymbol("blackcatSprite").play("waiting");

      });
      //Edge binding end

   })("catRunAction");
   //Edge symbol end:'catRunAction'

})(jQuery, AdobeEdge, "EDGE-27987461");