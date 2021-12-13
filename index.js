send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))){
      alert('Введите верные данные');
      return;
    }
    c.value = ((1 + parseInt(a.value)) / (1 + parseInt(b.value))) - 1 + ' %';
}
