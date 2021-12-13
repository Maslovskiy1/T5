send.addEventListener("click", fnc);
function fnc(){
    if Number(a.value) || Number(b.value){
      alert('Введите верные данные');
      return;
    }
    c.value = ((a.value) + (b.value));
}
