
(function(){
	var count =1;
	document.getElementById("button").addEventListener('click', function(){
     
     count++
     if (count%2===0) {
     	document.getElementById("box").style.backgroundColor = "green"
     	document.getElementById("button").innerHTML = "make red"
     }
     else {
     	document.getElementById("box").style.backgroundColor = "red"
     	document.getElementById("button").innerHTML = "make green"
     }

})
})()
