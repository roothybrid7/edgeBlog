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
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','122px','63px','auto','14.1%'],
            borderRadius:["0px","0px","0px","0px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[1,"rgba(0,0,0,1)","solid"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '1000px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", '80.87%'],
            ["style", "left", 'auto'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '10px'],
            ["color", "border-color", 'rgba(51,51,51,0.80)'],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_Rectangle}", "right", '0%', { fromValue: '80.87%'}], position: 0, duration: 2000 },
            { id: "eid27", tween: [ "style", "${_Rectangle}", "right", '80.87%', { fromValue: '0%'}], position: 2250, duration: 2000 }         ]
      }
   }
},
"hoge": {
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
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "bottom", '0px'],
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
            { id: "eid28", tween: [ "style", "${_Ellipse}", "bottom", '-1000px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInQuint" },
            { id: "eid10", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInQuint" }         ]
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
