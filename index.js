document.querySelector(".btn").addEventListener("click", generate);


function generate(){
	var result=document.querySelector("#text_data").value;
	var r="";
	for(var i=0; i<document.querySelector(".number_input_field").value; i++){
		r=r+result+"\n";	
	}
	document.querySelector(".output").textContent=r;
}
document.querySelector("#copy_btn").addEventListener("click", copy);

function copy(){
	document.querySelector(".output").select();
	document.execCommand('copy');
}