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
            fill:["rgba(0,0,0,0)",im+"bg.jpg",'0%','0%','100%','auto']
         },
         {
            id:'catRunAction',
            type:'rect',
            rect:['25','265','auto','auto','auto','auto']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['220px','23px','200px','177px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"],
            c:[
            {
               id:'blackcatSprite',
               type:'rect',
               rect:['26.2%','auto','auto','auto','auto','-9px']
            },
            {
               id:'Text',
               type:'text',
               rect:['49px','0px','auto','auto','auto','auto'],
               text:"waiting<br>",
               font:['Oregano, Arial, serif',40,"rgba(34,0,34,1.00)","700","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            }]
         },
         {
            id:'Button',
            type:'rect',
            rect:['504px','212px','101px','38px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"],
            boxShadow:["",5,5,5,0,"rgba(0,0,0,0.65)"],
            c:[
            {
               id:'BtnText',
               type:'text',
               rect:['20%','0%','auto','30px','auto','auto'],
               text:"run!",
               align:"left",
               font:['Arial, Helvetica, sans-serif',32,"rgba(34,0,34,1)","bold","none","normal"]
            }]
         }],
         symbolInstances: [
         {
            id:'blackcatSprite',
            symbolName:'blackcatSprite'
         },
         {
            id:'catRunAction',
            symbolName:'catRunAction'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bg}": [
            ["style", "height", '100%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "width", '100%']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '220px'],
            ["style", "width", '200px'],
            ["style", "top", '23px'],
            ["style", "height", '176.98334503174px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(34,0,34,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '49px'],
            ["style", "font-size", '40px'],
            ["style", "top", '0px'],
            ["style", "font-family", 'Oregano, Arial, serif'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_BtnText}": [
            ["style", "top", '0%'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '20%'],
            ["style", "font-size", '32px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px']
         ],
         "${_Button}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "top", '212.27px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '504px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.blur", '5px']
         ],
         "${_blackcatSprite}": [
            ["style", "top", 'auto'],
            ["style", "left", '20%'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         labels: {
            "animateEnd": 8000
         },
         timeline: [
         ]
      }
   }
},
"blackcatSprite": {
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
      rect: ['10px','10px','512px','503px','auto','auto'],
      transform: {},
      id: 'cat',
      type: 'image',
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/blackcat.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_defenceText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41.02px']
         ],
         "${_cat}": [
            ["style", "-webkit-transform-origin", [50,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "top", '10px'],
            ["style", "clip", [0,80,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '10px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '120px']
         ],
         "${_attackText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23.99px'],
            ["style", "width", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41.02px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: false,
         labels: {
            "sitting": 0,
            "standup": 1000,
            "running": 2000,
            "standing": 3000,
            "waiting": 4000
         },
         timeline: [
            { id: "eid63", tween: [ "transform", "${_cat}", "scaleY", '0.95', { fromValue: '1'}], position: 4000, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_cat}", "scaleY", '1', { fromValue: '0.95'}], position: 4250, duration: 250 },
            { id: "eid10", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,90,0]}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 1000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 3000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 4000, duration: 0 },
            { id: "eid150", tween: [ "style", "${_cat}", "-webkit-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid443", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid444", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid445", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid446", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 2000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 3000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 4000, duration: 0 }         ]
      }
   }
},
"catRunAction": {
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
      transform: [{},{},['0deg','0deg']],
      rect: ['4px','60px','582px','50px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)'],
      c: [
      {
         id: 'blackcatSprite',
         type: 'rect',
         rect: ['165px','-204px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'blackcatSprite',
      symbolName: 'blackcatSprite'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '60px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '50px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '4.01px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_blackcatSprite}": [
            ["style", "top", '-60.35px'],
            ["style", "left", '462.25px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '513px'],
            ["style", "width", '1064.0644174738px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         labels: {
            "animationEnd": 2500
         },
         timeline: [
            { id: "eid222", tween: [ "style", "${_blackcatSprite}", "left", '10.99px', { fromValue: '462.25px'}], position: 500, duration: 500 },
            { id: "eid227", tween: [ "style", "${_blackcatSprite}", "left", '462px', { fromValue: '10.99px'}], position: 1500, duration: 500 },
            { id: "eid229", tween: [ "transform", "${_blackcatSprite}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "transform", "${_blackcatSprite}", "scaleX", '-1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid230", tween: [ "transform", "${_blackcatSprite}", "scaleX", '1', { fromValue: '-1'}], position: 2500, duration: 0 },
            { id: "eid236", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['standup'] ], ""], position: 0 },
            { id: "eid237", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['running'] ], ""], position: 500 },
            { id: "eid238", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['standing'] ], ""], position: 1000 },
            { id: "eid239", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['running'] ], ""], position: 1500 },
            { id: "eid240", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['standing'] ], ""], position: 2000 },
            { id: "eid241", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcatSprite}', ['sitting'] ], ""], position: 2500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-27987461");
