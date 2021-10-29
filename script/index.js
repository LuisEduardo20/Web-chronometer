let cronometroEmExecucao = false;
let myTimer = null;

let hora = 0;
let minuto = 0;
let segundo = 0;
let miliSegundo = 0;

function addHour() {
  hora++;
  document.getElementById('hora').innerText = hora;
}

function addMinute() {
  if(minuto <= 59) {
    minuto++;
    document.getElementById('minuto').innerText = minuto;
  }
  else {
    addHora();
    minuto = 0;
    document.getElementById('minuto').innerText = minuto;
  }
}

function addSecond() {
  if(segundo < 59) {
    segundo++;
    document.getElementById('segundo').innerText = segundo;
  }
  else {
    addMinute();
    segundo = 0;
    document.getElementById('segundo').innerText = segundo;
  }
}

function addMiliSecond() {
  if(miliSegundo <= 59) {
    miliSegundo++
    document.getElementById('mili-segundo').innerText = miliSegundo;
  }
  else {
    addSecond();
    miliSegundo = 0;
    document.getElementById('mili-segundo').innerText = miliSegundo;
  }
}

document.getElementById('start').addEventListener('click', e => {
  if(!cronometroEmExecucao) {
    e.preventDefault();
    cronometroEmExecucao = true;
    myTimer = setInterval(addMiliSecond, 15);
  }
});

document.getElementById('pause').addEventListener('click', e => {
  e.preventDefault();
  clearInterval(myTimer);
  cronometroEmExecucao = false;
});

document.getElementById('reset').addEventListener('click', e => {
  e.preventDefault();

  clearInterval(myTimer);
  cronometroEmExecucao = false;
  
  hora = 0;
  minuto = 0;
  segundo = 0;
  miliSegundo = 0;

  document.getElementById('mili-segundo').innerText = '00';
  document.getElementById('segundo').innerText = '00';
  document.getElementById('minuto').innerText = '00';
  document.getElementById('hora').innerText = '00';
});