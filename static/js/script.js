const inputfile = document.getElementById('file'); 
const dialog = document.getElementById('dialog');

inputfile.oninput = function(){

dialog.style.padding= '2%';
dialog.style.background='green';
if(inputfile.files.length > 0){
for(var i=0; i<=inputfile.files.length -1; i++){
const fsize = inputfile.files.item(i).size;
const file = Math.round((fsize / 1024));




dialog.innerHTML ="<p><strong>Path:</strong> "+ inputfile.value + " </p>"+
"<p><strong>File Size:</strong> "+ file +" kb </p>"+
"<p><strong>File Type:</strong> "+ inputfile.type +"</p>"+
"<p><strong>Image Height:</strong> "+ inputfile.clientHeight +"px</p>"+
"<p><strong>Image Width:</strong> "+ inputfile.clientWidth +"px</p>"
;

}}

}



