var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//background
canvas.fillStyle = "lightblue";
canvas.fillRect(0,0,600,460);

//ground grass
canvas.beginPath();
canvas.fillStyle = "green";
canvas.fillRect(0,460,600,40);


//sun
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(600,0,70,0,2*Math.PI,true);
canvas.fill();

//clouds
canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(0,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(55,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(110,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(165,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(220,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(275,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(330,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(385,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(440,0,55,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(495,0,55,0,2*Math.PI,true);
canvas.fill();

//tree1 bases  wood
canvas.beginPath();
canvas.fillStyle = "brown";
canvas.fillRect(50,240,25,220);

//tree1 leaves
canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(0,450);
canvas.lineTo(130,450);
canvas.lineTo(63,400);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(7,410);
canvas.lineTo(123,410);
canvas.lineTo(63,360);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(14,370);
canvas.lineTo(116,370);
canvas.lineTo(63,320);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(21,330);
canvas.lineTo(109,330);
canvas.lineTo(63,280);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(28,290);
canvas.lineTo(102,290);
canvas.lineTo(63,240);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "darkgreen";
canvas.moveTo(35,260);
canvas.lineTo(95,260);
canvas.lineTo(63,210);
canvas.fill();