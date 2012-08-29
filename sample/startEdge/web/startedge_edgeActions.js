
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8250,function(sym,e){var count=sym.getVariable("count");count++;sym.$("Count").html(count);sym.setVariable("count",count);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("count",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8750,function(sym,e){sym.play("loop");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-6121832");