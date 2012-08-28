/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Oregano\', Arial, serif']='<link href=\'http://fonts.googleapis.com/css?family=Oregano\' rel=\'stylesheet\' type=\'text/css\'>';


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
            id:'Count',
            display:'none',
            type:'text',
            rect:['281px','119px','auto','auto','auto','auto'],
            text:"0",
            align:"center",
            font:['Oregano, Arial, serif',140,"rgba(255,255,255,0.80)","normal","none",""]
         },
         {
            id:'Caption',
            display:'none',
            type:'text',
            rect:['208px','110px','223px','29px','auto','auto'],
            text:"Animation Count",
            align:"center",
            font:['Oregano, Arial, serif',24,"rgba(255,255,255,0.7969)","normal","none","normal"]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['12px','10px','100px','100px','126px','20px'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,0,98,0.65)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'play',
            type:'image',
            rect:['280px','160','80','80','undefined','undefined'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"button.png"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Count}": [
            ["style", "top", '109px'],
            ["color", "color", 'rgba(255,255,255,0.80)'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", 'normal'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Oregano, Arial, serif'],
            ["style", "left", '283px'],
            ["style", "font-size", '140px']
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
            ["style", "opacity", '0'],
            ["transform", "rotateZ", '720deg']
         ],
         "${_play}": [
            ["style", "top", '160px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '280px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '640px']
         ],
         "${_Rectangle}": [
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Caption}": [
            ["style", "top", '110px'],
            ["style", "font-size", '24px'],
            ["style", "text-align", 'center'],
            ["style", "height", '29px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Oregano, Arial, serif'],
            ["style", "left", '208px'],
            ["style", "width", '223.01666259766px']
         ],
         "${_bg}": [
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7750,
         autoPlay: false,
         labels: {
            "loop": 1750
         },
         timeline: [
            { id: "eid43", tween: [ "style", "${_Caption}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInExpo" },
            { id: "eid44", tween: [ "style", "${_Count}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInExpo" },
            { id: "eid42", tween: [ "transform", "${_RoundRect}", "rotateZ", '0deg', { fromValue: '720deg'}], position: 500, duration: 750, easing: "easeInExpo" },
            { id: "eid49", tween: [ "style", "${_play}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
            { id: "eid12", tween: [ "style", "${_RoundRect}", "width", '150px', { fromValue: '100px'}], position: 1750, duration: 1000, easing: "easeOutExpo" },
            { id: "eid25", tween: [ "style", "${_RoundRect}", "width", '100px', { fromValue: '150px'}], position: 4750, duration: 1000, easing: "easeInExpo" },
            { id: "eid40", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeInExpo" },
            { id: "eid50", tween: [ "style", "${_play}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_RoundRect}", "top", '10px', { fromValue: '150px'}], position: 500, duration: 750, easing: "easeInExpo" },
            { id: "eid27", tween: [ "style", "${_RoundRect}", "top", '290px', { fromValue: '10px'}], position: 3250, duration: 1000, easing: "swing" },
            { id: "eid28", tween: [ "style", "${_RoundRect}", "top", '9.85px', { fromValue: '290px'}], position: 6250, duration: 1000 },
            { id: "eid45", tween: [ "style", "${_Count}", "left", '283px', { fromValue: '283px'}], position: 7750, duration: 0, easing: "easeOutExpo" },
            { id: "eid29", tween: [ "style", "${_RoundRect}", "left", '10px', { fromValue: '270px'}], position: 500, duration: 750, easing: "easeInExpo" },
            { id: "eid23", tween: [ "style", "${_RoundRect}", "left", '480px', { fromValue: '10px'}], position: 1750, duration: 1000, easing: "easeOutExpo" },
            { id: "eid24", tween: [ "style", "${_RoundRect}", "left", '10px', { fromValue: '480px'}], position: 4750, duration: 1000, easing: "easeInExpo" },
            { id: "eid46", tween: [ "style", "${_Count}", "top", '109px', { fromValue: '109px'}], position: 7750, duration: 0, easing: "easeOutExpo" }         ]
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
