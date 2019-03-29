(function(w){
	function Bird(ctx,img,widthFrame,heightFrame,x,y){
			this.ctx=ctx;
			this.img=img;
			this.widthFrame=widthFrame;
			this.heightFrame=heightFrame;
			this.x=x;
			this.y=y;
			this.width=this.img.width/this.widthFrame;
			this.height=this.img.height/this.heightFrame;
			this.currentFrame=0;
			this.speed=2;
			this.speedPlus=0.5;
			this.bind();
		}
	load.extend(Bird.prototype,{
		draw:function(){
			var baseRadian=Math.PI/180*10;
			var maxRadian=Math.PI/180*45;

			var rotateRadian=baseRadian*this.speed;
			rotateRadian=rotateRadian>=maxRadian?maxRadian:rotateRadian;
			this.ctx.save();

			this.ctx.translate(this.x+this.width/2,this.y+this.height/2);
			this.ctx.rotate(rotateRadian);
			this.ctx.drawImage(this.img,this.width*this.currentFrame,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
			this.ctx.restore();
		},
		update:function(){
			this.currentFrame=++this.currentFrame>=this.widthFrame?0:this.currentFrame;
			this.y+=this.speed;
			this.speed=this.speed+this.speedPlus;
		},
		bind:function(){
			var that=this;
			this.ctx.canvas.addEventListener('click',function(){
				that.speed=-3;
			})
		}
	})
	var bird=null;
	w.getBird=function(ctx,img,widthFrame,heightFrame,x,y){
		if(!bird){
			bird=new Bird(ctx,img,widthFrame,heightFrame,x,y)
		}
		return bird;	
	}
})(window)