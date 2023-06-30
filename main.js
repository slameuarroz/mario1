img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	//não
	img=loadImage(mario05.png)
}

function setup(){
	canvas = createCanvas(1240,336);
	video=createCapture(VIDEO);
	video.size(800,400);
	poseNet=ml5.poseNet(video,modelLoad());
	poseNet.on("pose",gotPose);;
	//sim
	instializeInSetup(mario);
}
function draw() {
	game()
	//marioX
	if (noseX<300){
		marioX=marioX-1;
	}
	if (noseX>300){
		marioX=marioX+1;
	}
	//marioY
	if (noseY<150){
		marioY=marioY-1;
	}
	image(img,marioX,marioY,40,70);
}
function modelLoad(){
	console.log("modelo carregado");
}
function gotPose(results){
	if (results.length > 0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
