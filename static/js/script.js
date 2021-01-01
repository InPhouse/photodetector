const inputfile = document.getElementById('file'); 
const dialog = document.getElementById('dialog');


inputfile.oninput = function(){
dialog.style.padding= '2%';
dialog.style.background='green';
dialog.innerHTML ="<p><strong>Path:</strong> "+ inputfile.value + " Added </p>"+
"<p><strong>File Size:</strong> "+ inputfile.size +" bytes </p>"+
"<p><strong>File Type:</strong> "+ inputfile.type +"</p>"
;


}
