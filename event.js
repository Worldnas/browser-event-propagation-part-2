/*var mylink=document.getElementById("link")

mylink.addEventListener("click",event)
function event(e){
	//alert('done');
	alert(e.target)
	e.preventDefault();
}*/


var table= document.getElementById("multi")
var col=table.getElementsByTagName("col");
table.addEventListener("mouseover",ali);
table.addEventListener("mouseout",ali);
 
function ali(e){
	var t=e.target;
	if(t.nodeName != "TD") return;
	var name=(e.type=="mouseover" ? "active" : "");
	t.parentNode.className=name;
	col[t.cellIndex].className=name;
}

function openwin(){window.open ("","newwin","height=250 width=250 toolbar=0 menubar=0 resizable=0 screenx=50 screeny=50");}