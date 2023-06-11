function display(value){
    document.getElementById('scr').value+=value;
}
function clearscreen(){
    document.getElementById('scr').value = '';
}
function calculate(){
    var p = document.getElementById('scr').value;
    var q = eval(p);
    document.getElementById('scr').value=q;
}