document.addEventListener('DOMContentLoaded',()=> {
	procedure();
});


var xHttp= new XMLHttpRequest();
function Searchprocedure(){
	var url='superheroes.php';
	xHttp.onreadystatechange=fetching;
	xHttp.open("GET",url,true);
	xHttp.send();
}

function fetching(){
		if (xHttp.readyState===XMLHttpRequest.DONE){
			if (xHttp.status===200){
				var response=xHttp.responseText;
				alert (response);
			}else{
				alert("A request error");
			}
		}
} 

function procedure(){
	document.getElementById("Search").addEventListener('click', Searchprocedure);
}
