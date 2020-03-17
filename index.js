(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[696,752,50,238],[696,992,147,79],[696,1073,147,79],[734,428,147,79],[577,428,155,79],[577,509,155,79],[577,590,155,79],[577,671,155,79],[0,1228,155,79],[157,1228,155,79],[577,0,348,212],[577,214,348,212],[314,1228,155,79],[471,1228,155,79],[628,1228,155,79],[0,0,575,761],[0,763,694,463]]}
];


// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mano = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.netflix = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.salatv = function() {
	this.initialize(img.salatv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2846,1854);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.mano();
	this.instance.setTransform(-387,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-11.95,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cursor, new cjs.Rectangle(-387,-5,575,851), null);


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(1.9,9.9,0.4713,0.4713);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(1.9,9.9,0.4713,0.4713);

	this.instance_2 = new lib.CachedBmp_22();
	this.instance_2.setTransform(1.9,9.9,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Capa_1
	this.instance_3 = new lib.CachedBmp_25();
	this.instance_3.setTransform(-82,-50,0.4713,0.4713);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-82,-50,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-50,164,99.9);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,9.9,0.4713,0.4713);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(0,9.9,0.4713,0.4713);

	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(0,9.9,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Capa_1
	this.instance_3 = new lib.CachedBmp_25();
	this.instance_3.setTransform(-82,-50,0.4713,0.4713);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-82,-50,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-50,164,99.9);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,9.9,0.4713,0.4713);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,9.9,0.4713,0.4713);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(0,9.9,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Capa_1
	this.instance_3 = new lib.CachedBmp_25();
	this.instance_3.setTransform(-82,-50,0.4713,0.4713);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-82,-50,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-50,164,99.9);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,9.9,0.4713,0.4713);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,9.9,0.4713,0.4713);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(0,9.9,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Capa_1
	this.instance_3 = new lib.CachedBmp_25();
	this.instance_3.setTransform(-82,-50,0.4713,0.4713);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-82,-50,0.4713,0.4713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-50,164,99.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		/* Cursor de ratón personalizado
		Reemplaza el cursor de ratón predeterminado por la instancia del símbolo especificado.
		*/
		stage.canvas.style.cursor = "none";
		this.cursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.cursor.x = stage.mouseX;
			this.cursor.y = stage.mouseY;
		}
		
		/*control de los botones*/
		
		/* Evento MouseClick
		Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		
		Instrucciones:
		1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		El código se ejecutará al hacer clic en la instancia del símbolo.
		*/
		
		this.btn1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.gotoAndStop(0);
		}
		
		
		this.btn2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.gotoAndStop(1);
		}
		
		
		this.btn3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.gotoAndStop(2);
		}
		
		
		this.btn4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.gotoAndStop(3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// mano_cursor
	this.cursor = new lib.cursor();
	this.cursor.name = "cursor";
	this.cursor.setTransform(285.5,469);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(4));

	// botones
	this.btn4 = new lib.btn4();
	this.btn4.name = "btn4";
	this.btn4.setTransform(1163.85,648.2,1.0609,1.0609);
	new cjs.ButtonHelper(this.btn4, 0, 1, 2);

	this.btn3 = new lib.btn3();
	this.btn3.name = "btn3";
	this.btn3.setTransform(987.2,648.2,1.0609,1.0609);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2);

	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(811,648.2,1.0609,1.0609);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2);

	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(632.95,648.2,1.0609,1.0609);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4}]}).wait(4));

	// fondo
	this.instance = new lib.salatv();
	this.instance.setTransform(-10,-119,0.6851,0.6851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// videos
	this.video1 = new lib.an_Video({'id': 'video1', 'src':'videos/video.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'images/', 'preload':true, 'class':'video'});

	this.video1.name = "video1";
	this.video1.setTransform(901.05,447.85,1.0051,0.7538,0,0,0,200.1,150.1);

	this.video2 = new lib.an_Video({'id': 'video2', 'src':'videos/Pexels%20Videos%202903.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'images/', 'preload':true, 'class':'video'});

	this.video2.name = "video2";
	this.video2.setTransform(900.4,448.2,0.9897,0.7423,0,0,0,200,150);

	this.video3 = new lib.an_Video({'id': 'video3', 'src':'videos/Woman%20Reading%20Newspaper.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'images/', 'preload':true, 'class':'video'});

	this.video3.name = "video3";
	this.video3.setTransform(900.1,449.2,0.9948,0.7461,0,0,0,200,150);

	this.instance_1 = new lib.netflix();
	this.instance_1.setTransform(700,309,0.5806,0.5806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.video1}]}).to({state:[{t:this.video2}]},1).to({state:[{t:this.video3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(858.5,421,1081.3,894);
// library properties:
lib.properties = {
	id: 'F1A0C9DD4E16014FA62ED9C3BB5F8F6F',
	width: 1920,
	height: 1080,
	fps: 29,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/salatv.png?1584464359628", id:"salatv"},
		{src:"images/index_atlas_.png?1584464359579", id:"index_atlas_"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1584464359629", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1584464359629", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1584464359629", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F1A0C9DD4E16014FA62ED9C3BB5F8F6F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;