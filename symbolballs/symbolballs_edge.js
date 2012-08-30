/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'sea',
            type:'image',
            rect:['0','auto','100%','10%','auto','0px'],
            fill:["rgba(0,0,0,0)",im+"sea.png",'0%','0%','2000px','1372px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['0px','0px','80px','80px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50px 50px","50px 50px","0px 0px","0px 0px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[10,"rgba(51,51,51,1.00)","solid"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,170,255,0.60)'],
            ["style", "height", '480px'],
            ["style", "width", '640px']
         ],
         "${_RoundRect}": [
            ["style", "right", 'auto'],
            ["style", "cursor", 'pointer'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(255,54,54,0.65)'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '80px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["style", "height", '80px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-width", '10px'],
            ["style", "left", '0px']
         ],
         "${_sea}": [
            ["style", "height", '10%'],
            ["style", "bottom", '0px'],
            ["style", "top", 'auto'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "moveEnd": 5000
         },
         timeline: [
            { id: "eid76", tween: [ "style", "${_RoundRect}", "left", '540px', { fromValue: '0px'}], position: 0, duration: 2000 },
            { id: "eid77", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '540px'}], position: 2500, duration: 2000 }         ]
      }
   }
},
"redBall": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','63px','54px','auto','-278px'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(192,192,192,1)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "bottom", '-25px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '63.223701477051px'],
            ["style", "top", 'auto'],
            ["style", "height", '53.533332824707px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '53.533332824707px'],
            ["style", "width", '63.216667175293px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid10", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250, easing: "easeInQuint" },
            { id: "eid79", tween: [ "style", "${_Ellipse}", "bottom", '-450px', { fromValue: '-25px'}], position: 0, duration: 500, easing: "easeInQuint" }         ]
      }
   }
},
"blueBall": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','63px','54px','auto','-278px'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(192,192,192,1)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,255,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "bottom", '-25px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '63.223701477051px'],
            ["style", "top", 'auto'],
            ["style", "height", '53.533332824707px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '53.533332824707px'],
            ["style", "width", '63.216667175293px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid10", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250, easing: "easeInOutBounce" },
            { id: "eid28", tween: [ "style", "${_Ellipse}", "bottom", '-450px', { fromValue: '-25px'}], position: 0, duration: 1000, easing: "easeInOutBounce" }         ]
      }
   }
},
"greenBall": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','63px','54px','-278px','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(192,192,192,1)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,255,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "bottom", '-25px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '63.223701477051px'],
            ["style", "top", 'auto'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '53.533332824707px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '53.533332824707px'],
            ["style", "width", '63.216667175293px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid65", tween: [ "transform", "${_Ellipse}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInCirc" },
            { id: "eid10", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250, easing: "easeInCirc" },
            { id: "eid28", tween: [ "style", "${_Ellipse}", "bottom", '-450px', { fromValue: '-25px'}], position: 0, duration: 1000, easing: "easeInCirc" },
            { id: "eid64", tween: [ "transform", "${_Ellipse}", "scaleY", '1.5', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInCirc" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29296295");
