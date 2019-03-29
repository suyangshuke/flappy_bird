(function(w){
	function Sence(ctx,imgObj){
		this.ctx=ctx;
		this.imgObj=imgObj;
		this.roles=[];
		this.init();
	}
	Sence.prototype={
		constructor:Sence,
		init:function(){
			this.roles.push(getSky(ctx, this.imgObj.sky, 3));
			this.roles.push(getSky(ctx, this.imgObj.sky, 3));

			this.roles.push(getBird(ctx,this.imgObj.bird,3,1,10,10));
			for(var i=0;i<=6;i++){
			 	this.roles.push(getPipe(ctx,this.imgObj.pipeDown,this.imgObj.pipeUp,150,this.imgObj.land.height,3))
			}
			for(var i=0;i<=4;i++){
				this.roles.push(getLand(ctx,this.imgObj.land,3))
			}
		},
		draw:function(){
			ctx.beginPath();
				this.roles.forEach(function(item){
					item.draw();
					item.update();
				})
		}
	}
	w.getGameSence=function(ctx,imgObj){
		return new Sence(ctx,imgObj);
	}
})(window)