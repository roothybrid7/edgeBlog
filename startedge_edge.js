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
            id:'bg',
            type:'image',
            rect:['0','0','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['12px','10px','100px','100px','20px','126px'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,0,98,0.65)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bg}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,0,98,0.65)'],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "right", 'auto'],
            ["style", "left", '270px'],
            ["style", "width", '100px'],
            ["style", "top", '150px'],
            ["style", "height", '100px'],
            ["transform", "rotateZ", '720deg'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '400px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7250,
         autoPlay: true,
         labels: {
            "loop": 1250
         },
         timeline: [
            { id: "eid12", tween: [ "style", "${_RoundRect}", "width", '150px', { fromValue: '100px'}], position: 1250, duration: 1000, easing: "easeInExpo" },
            { id: "eid25", tween: [ "style", "${_RoundRect}", "width", '100px', { fromValue: '150px'}], position: 4250, duration: 1000, easing: "easeInExpo" },
            { id: "eid40", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeInExpo" },
            { id: "eid30", tween: [ "style", "${_RoundRect}", "top", '10px', { fromValue: '150px'}], position: 0, duration: 750, easing: "easeInExpo" },
            { id: "eid27", tween: [ "style", "${_RoundRect}", "top", '290px', { fromValue: '10px'}], position: 2750, duration: 1000, easing: "swing" },
            { id: "eid28", tween: [ "style", "${_RoundRect}", "top", '9.85px', { fromValue: '290px'}], position: 5750, duration: 1000 },
            { id: "eid42", tween: [ "transform", "${_RoundRect}", "rotateZ", '0deg', { fromValue: '720deg'}], position: 0, duration: 750, easing: "easeInExpo" },
            { id: "eid29", tween: [ "style", "${_RoundRect}", "left", '10px', { fromValue: '270px'}], position: 0, duration: 750, easing: "easeInExpo" },
            { id: "eid23", tween: [ "style", "${_RoundRect}", "left", '480px', { fromValue: '10px'}], position: 1250, duration: 1000, easing: "easeInExpo" },
            { id: "eid24", tween: [ "style", "${_RoundRect}", "left", '10px', { fromValue: '480px'}], position: 4250, duration: 1000, easing: "easeInExpo" }         ]
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
})(jQuery, AdobeEdge, "EDGE-6121832");
