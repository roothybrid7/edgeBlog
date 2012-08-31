
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getVariable("switchPose")("sitting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getVariable("switchPose")("running");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.getVariable("switchPose")("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.getVariable("switchPose")("standing");});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){function switchPose(label){sym.getSymbol("blackcatSprite").stop(label);sym.$("Text").html(label);}
sym.setVariable("switchPose",switchPose);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'catAnimation_black'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.play("waiting");});
//Edge binding end
})("blackcatSprite");
//Edge symbol end:'blackcatSprite'

//=========================================================

//Edge symbol: 'catAnimattion'
(function(symbolName){})("catAnimattion");
//Edge symbol end:'catAnimattion'
})(jQuery,AdobeEdge,"EDGE-27987461");