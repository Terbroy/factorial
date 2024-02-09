const btn = document.getElementById('btn');
const res = document.getElementById('response');

btn.addEventListener('click', (e)=>{
  const input = document.getElementById('input').value;
  e.preventDefault();
  dato = parseInt(input)
  let resultado =1;
  if (dato != NaN && dato != null && dato !="") {
    for (let i = 1; i <= dato; i++){
      resultado *= i;
    }
  } else {
    alert("No puedes ingresar un dato diferente a un numero");
  }
  res.innerHTML=resultado
})