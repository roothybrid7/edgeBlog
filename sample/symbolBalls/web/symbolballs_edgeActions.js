
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var timeout=Math.random()*2000;console.log(timeout);setTimeout(function(){var hoge=sym.createChildSymbol("hoge","Rectangle");hoge.play();},timeout);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'hoge'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.deleteSymbol();});
//Edge binding end
})("hoge");
//Edge symbol end:'hoge'
})(jQuery,AdobeEdge,"EDGE-29296295");