var textarea =  document.getElementById('text-area');
var char = document.getElementById('char');
var words = document.getElementById('words');
var space = document.getElementById('space');
var lines = document.getElementById('lines');
var c = 0; var w = 1; var s = 0; var l = 1;  
textarea.onkeyup = (event) =>{
      textarea.value.match(/[\w]|[^\s]/g) == null? c = 0 : c = textarea.value.match(/[\w]|[^\s]/g).length
      textarea.value.match(/[ ]/g) == null ? s = 0 : s = textarea.value.match(/[ ]/g).length
      textarea.value.split(/\n/g) == 0 ? l = 0 : l = textarea.value.split(/\n/g).length
      textarea.value.match(/\w+/g) == null? w = 0 : w = textarea.value.match(/\w+/g).length 
     space.innerHTML = s;
     char.innerHTML = c;
     lines.innerHTML = l;
     words.innerHTML = w;
}