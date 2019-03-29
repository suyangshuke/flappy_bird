var load={
	loadImage:function(imgUrl,fn){
			var tempImg=0;
			var objImg={};
			var loaded=0;
			var length=0;
			for(var key in imgUrl){
				length++;
				tempImg=new Image();
				tempImg.src=imgUrl[key];
				objImg[key]=tempImg;
				tempImg.onload=function(){
					loaded++;
					if(loaded>=length){
						fn(objImg);
					}
				}
			}
		},
	extend:function(o1,o2){
			for(var key in o2){
				if(o2.hasOwnProperty(key)){
					o1[key]=o2[key];
				}
			}
		}
}