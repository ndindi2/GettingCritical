var greenBox = document.getElementById("box1");
var greenButton = document.getElementById("button1");
var redButton = document.getElementById("button2");

greenButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'green'
})
redButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'red'
})