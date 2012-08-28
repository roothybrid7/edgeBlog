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
            rect:['10px','10px','100px','100px','auto','auto'],
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
            ["transform", "scaleX", '1'],
            ["style", "top", '10px'],
            ["style", "height", '100px'],
            ["style", "right", 'auto'],
            ["style", "left", '10px'],
            ["style", "width", '100px']
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
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
