
var canvas;
var gl;

var program;

var NumVertices  = 36;

var pointsArray = [];
var colorsArray = [];

var framebuffer;

var flag = true;

var color = new Uint8Array(4);

var vertices = [

		
		/*
		//surface1
		vec4(0,-0.5,-0.0,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.0,1),		
		vec4(0.5,-0.5,-0.0,1),
		vec4(0,-0.5,-0.0,1),
		
		
		//surface2
		vec4(0,0,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0,0,-0.5,1),
		
		//surface3
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,-0.5,1),

		//surface4
		vec4(0,-0.5,-0,1),
		vec4(0,0,-0,1),
		vec4(0,0,-0,1),
		vec4(0.5,0,-0,1),
		vec4(0.5,0,-0,1),
		vec4(0.5,-0.5,-0,1),
		vec4(0.5,-0.5,-0,1),
		vec4(0,-0.5,-0,1),
		
		//surface5
		vec4(0,0,0,1),
		vec4(0,0,-0.5,1),
		vec4(0,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,0,1),
		vec4(0.5,0,0,1),
		vec4(0,0,0,1),
		
		//surface6
		vec4(0,-0.5,0,1),
		vec4(0,0,0,1),
		vec4(0,0,0,1),
		vec4(0,0,-0.5,1),
		vec4(0,0,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,0,1),
		*/		
		//surface1
		vec4(0,-0.5,-0.0,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,0,1),		
		vec4(0.5,-0.5,0,1),
		vec4(0,-0.5,0,1),
		
		
		//surface2
		vec4(0,0,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0,0,-0.5,1),
		
		//surface3
		vec4(0.5,-0.5,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,0,1),
		vec4(0.5,-0.5,-0.5,1),

		//surface4
		vec4(0,-0.5,-0,1),
		vec4(0,0,-0,1),
		vec4(0,0,-0,1),
		vec4(0.5,0,-0,1),
		vec4(0.5,0,-0,1),
		vec4(0.5,-0.5,-0,1),
		vec4(0.5,-0.5,-0,1),
		vec4(0,-0.5,-0,1),
		
		//surface5
		vec4(0,0,0,1),
		vec4(0,0,-0.5,1),
		vec4(0,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,-0.5,1),
		vec4(0.5,0,0,1),
		vec4(0.5,0,0,1),
		vec4(0,0,0,1),
		
		//surface6
		vec4(0,-0.5,0,1),
		vec4(0,0,0,1),
		vec4(0,0,0,1),
		vec4(0,0,-0.5,1),
		vec4(0,0,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,-0.5,1),
		vec4(0,-0.5,0,1),
		
		
		
		
		vec4(0,0,0,1),
		vec4(1,0,0,1),
		vec4(0,1,0,1),
		vec4(0,0,0,1),
		vec4(0,0,1,1),
		vec4(0,0,0,1),

	];

	
	
var vertexColors = [
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
        vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
        vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
        vec4( 1.0, 1.0, 1.0, 1.0 ),  // white
        vec4( 0.0, 1.0, 1.0, 1.0 ),   // cyan
    ];

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = xAxis;

var theta = [45,45,45];

var thetaLoc;

var Index = 0;


function quad(a, b, c, d) {
     pointsArray.push(vertices[a]); 
     colorsArray.push(vertexColors[0]); 
     pointsArray.push(vertices[b]); 
     colorsArray.push(vertexColors[0]); 
     pointsArray.push(vertices[c]); 
     colorsArray.push(vertexColors[0]);    
     pointsArray.push(vertices[d]); 
     colorsArray.push(vertexColors[0]); 
}


function colorCube()
{
    quad( 0, 1, 2, 3 );
    quad( 4, 5, 6, 7 );
	quad( 8, 9, 10, 11 );
    quad( 12, 13, 14, 15 );
	quad( 16, 17, 18, 19 );
    quad( 20, 21, 22, 23 );
	quad( 24, 25, 26, 27 );
	quad( 28, 29, 30, 31 );
	quad( 32, 33, 34, 35 );
	quad( 36, 37, 38, 39 );
	quad( 40, 41, 42, 43 );
	quad( 44, 45, 46, 47 );
	
    
}

window.onload = function init() {
    canvas = document.getElementById( "gl-canvas" );
    
    var ctx = canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 100, 100, 100, 1.0 );
    
    gl.enable(gl.CULL_FACE);
    
    var texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 512, 512, 0, 
       gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.generateMipmap(gl.TEXTURE_2D);

// Allocate a frame buffer object

   framebuffer = gl.createFramebuffer();
   gl.bindFramebuffer( gl.FRAMEBUFFER, framebuffer);


// Attach color buffer

   gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

// check for completeness

   //var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
   //if(status != gl.FRAMEBUFFER_COMPLETE) alert('Frame Buffer Not Complete');

gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    //
    //  Load shaders and initialize attribute buffers
    //
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
	
    colorCube();
	//x axis red
	pointsArray.push(vertices[48]);
	colorsArray.push(vertexColors[1]);
	pointsArray.push(vertices[49]);
	colorsArray.push(vertexColors[1]);
	//y axis green
	pointsArray.push(vertices[50]);	
	colorsArray.push(vertexColors[3]);
	pointsArray.push(vertices[51]);
	colorsArray.push(vertexColors[3]);
	//z axis blue
	pointsArray.push(vertices[52]);
	colorsArray.push(vertexColors[4]);
	pointsArray.push(vertices[53]);	
	colorsArray.push(vertexColors[4]);
	
	
	
    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );
    
    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW );
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(program, "theta"); 
       
    render();
}

var render = function(){
    gl.clear( gl.COLOR_BUFFER_BIT );
    
    gl.uniform3fv(thetaLoc, theta);
    gl.uniform1i(gl.getUniformLocation(program, "i"),0);
	
    gl.drawArrays( gl.LINES, 0, 48 );
	//gl.drawArrays( gl.LINES, 0, 6 );
    requestAnimFrame(render);
}