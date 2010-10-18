jQuery.fn.drawHexFace = function(id, smiley, scaleFactor, canvasStrokeColor, canvasFillColor, styleOptions) 
{
	
	var fillColor = canvasFillColor || "#FFFFFF";     //defaults to transparent fill
	var strokeColor = canvasStrokeColor || "#666666"; //defaults to black border
	scaleFactor = scaleFactor || 1;
	styleOptions = styleOptions || "{}";
	
	var container = this;
	var newCanvas = document.createElement('canvas');

	canvasWidth = 38*scaleFactor;
	canvasHeight = 32*scaleFactor;

	if (!newCanvas.getContext)
	{
		//only if IE :(
		container.append("<div id='" + id + "' width=" + canvasWidth + " height=" + canvasHeight + " class='hexaface'");
		container.append("style='" + styleOptions + "'></div>"); 
	}
	else
	{
		newCanvas.setAttribute('id', id);
		newCanvas.setAttribute('width', canvasWidth);
		newCanvas.setAttribute('height', canvasHeight);
		newCanvas.setAttribute('class', 'hexaface');
		newCanvas.setAttribute('style', styleOptions);
		container.append(newCanvas);
	}
	

	var canvas = document.getElementById(id); 

	if(!canvas.getContext && typeof G_vmlCanvasManager  != 'undefined' ) 
	{ 
		canvas = G_vmlCanvasManager.initElement(canvas); 
	} 

	if (canvas.getContext) 
	{
		var ctx = canvas.getContext("2d");
		//ctx.canvas.width = canvas.width*scaleFactor;
		//ctx.canvas.height = canvas.height*scaleFactor;
		ctx.scale(scaleFactor, scaleFactor);
		ctx.lineWidth = 1.5;
		ctx.fillStyle = fillColor;
		ctx.strokeStyle = strokeColor;

		x=1;y=1;
		ctx.beginPath();
		ctx.moveTo(x, y+15);ctx.lineTo(x+8, y);
		ctx.lineTo(x+28, y);ctx.lineTo(x+36, y+15);
		ctx.lineTo(x+28, y+30);ctx.lineTo(x+8, y+30);
		ctx.lineTo(x, y+15);
		ctx.closePath();

		if (canvasFillColor != null) ctx.fill();
		if (canvasStrokeColor != null || canvasFillColor == null) ctx.stroke();
		ctx.save();

		ctx.font = "bold 10px sans-serif";
		ctx.fillStyle = 'black'
		ctx.rotate(Math.PI/2);
		set_textRenderContext(ctx);
		if(check_textRenderContext(ctx)) {
			ctx.strokeText(smiley, 10, -23, 6, 200, 100, 100);
		}

	}
}