document.addEventListener('DOMContentLoaded',()=> {
	var xHttp= new XMLHttpRequest();
	procedure(xHttp);
});



function Searchprocedure(request){
	var url='http://localhost:8080/superheroes.php';
	request.onreadystatechange=fetching;
	request.open("GET",url);
	request.send();
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

function procedure(request){
	document.getElementById("Search").addEventListener('click', Searchprocedure(request));
}
