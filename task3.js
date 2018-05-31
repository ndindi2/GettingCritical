var greenBox = document.getElementById("box1");
var grButton = document.getElementById("button");
var redBox = document.getElementById("box2");
var grButton = document.getElementById("button");

grButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'green'
})
grButton.addEventListener('click', function(){
	redBox.style.backgroundColor = 'red'
})