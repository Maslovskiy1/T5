send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(a.value)) || (isNaN(b.value)){
      alert('Введите верные данные');
      return;
    }
    c.value = ((a.value) + (b.value));
}
