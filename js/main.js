var canvas=document.querySelector("canvas")
canvas.width=(window.innerWidth)*.94;
canvas.height=(window.innerHeight)*.65;

var c=canvas.getContext('2d');

window.addEventListener('resize',
	function(event){
		canvas.width=window.innerWidth*0.95;
		canvas.height=window.innerHeight*0.65;
        c.clearRect(0,0,innerWidth,innerHeight);
        
        adjust();
});

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

function Rectangle(x,y,w,h)
{
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.draw=function()
    {
        //c.fillStyle="orange";
        c.fillRect(this.x,this.y,this.w,this.h);
    }
}

function adjust(){
   var posx=0;
   var t=canvas.width-bars;
   var w=t/(bars);
   for(var i=0;i<bars;i++)
   {
       rectArray[i].x=posx;
       posx=posx+(w+1);
       rectArray[i].w=w;
   }
}

var temp=(window.innerHeight)*.60;
function init()
{
    isSorted=false;
    rectArray=[];
    rectArray1=[];
    var t=canvas.width-bars;//because leaving 1px gap in bars
    var x,y,w,h;
    x=0;
    y=0;
    w=t/(bars); // t is every time width of canvas

    for(var i=0;i<bars;i++)
    {
        h=randomNumber(20,temp);
        rectArray.push(new Rectangle(x,y,w,h));
        rectArray1.push(h);
        x=x+(w+1); 
    }

}

function animate()
{//animates the screen in draws the update rectangle
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<rectArray.length;i++)
    {
        rectArray[i].draw();
    } 

}
init();
animate();
