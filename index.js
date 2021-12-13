send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(a.value)) + isNaN(parseInt(b.value)))
    {
      return;
    }
    c.value = (( parseInt(a.value)) + ( parseInt(b.value)));
}
