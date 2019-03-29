(function(w){
	function Pipe(ctx,imgDown,imgUp,space,landHeight,speed){
			this.ctx=ctx;
			this.imgDown=imgDown;
			this.imgUp=imgUp;
			this.space=space;
			this.landHeight=landHeight;
			this.speed=speed || 2;
			this.width=this.imgDown.width;
			this.height=this.imgDown.height;
			this.minHeight=100;
			Pipe.len++;
			this.x=300+this.width*3*(Pipe.len-1);
			this.init();
		}
	Pipe.len=0;
	load.extend(Pipe.prototype,{
		init:function(){
			var maxHeight=this.ctx.canvas.height-this.landHeight-this.space-this.minHeight;
			var randomHeight=Math.random()*maxHeight;
			randomHeight=randomHeight<=this.minHeight?this.minHeight:randomHeight;
			this.downY=randomHeight-this.height;
			this.upY=randomHeight+this.space;
		},
		draw:function(){
			this.ctx.drawImage(this.imgDown,this.x,this.downY);
			this.ctx.drawImage(this.imgUp,this.x,this.upY);
			 this.drawPath();

		},
		drawPath:function(){
			this.ctx.rect(this.x,this.downY,this.width,this.height);
			this.ctx.rect(this.x,this.upY,this.width,this.height);
			this.ctx.stroke();
		},
		update:function(){
			this.x-=this.speed;
			if(this.x<=-this.width){
				//从新生成一个randomHeight，不然就会周期性重复
				this.init();
				this.x=this.width*3*Pipe.len;
			}
		}
	})
	w.getPipe=function(ctx,imgDown,imgUp,space,landHeight,speed){
		return new Pipe(ctx,imgDown,imgUp,space,landHeight,speed);
	}
})(window)