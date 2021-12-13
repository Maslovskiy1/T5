send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))){
      alert('Введите верные данные');
      return;
    }
    c.value = (( parseInt(a.value)) + ( parseInt(b.value)));
}
