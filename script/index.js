let cronometroEmExecucao = false;
let myTimer = null; // vai armazenar o setInterval

let hora = 0;
let minuto = 0;
let segundo = 0;
let miliSegundo = 0;

function addHour() {
  hora++;
  if(hora < 10)
    document.getElementById('hora').innerText = `0${hora}`;
  else
    document.getElementById('hora').innerText = hora;
}

function addMinute() {
  if(minuto <= 59) {
    minuto++;
    if(minuto < 10)
      document.getElementById('minuto').innerText = `0${minuto}`;
    else
      document.getElementById('minuto').innerText = minuto;
  }
  else {
    addHora();
    minuto = 0;
    document.getElementById('minuto').innerText = '00';
  }
}

function addSecond() {
  if(segundo < 59) {
    segundo++;
    if(segundo < 10)
      document.getElementById('segundo').innerText = `0${segundo}`;
    else
      document.getElementById('segundo').innerText = segundo;
  }
  else {
    addMinute();
    segundo = 0;
    document.getElementById('segundo').innerText = '00';
  }
}

function addMiliSecond() {
  if(miliSegundo <= 59) {
    miliSegundo++
    if(miliSegundo < 10)
      document.getElementById('mili-segundo').innerText = `0${miliSegundo}`;
    else
      document.getElementById('mili-segundo').innerText = miliSegundo;
  }
  else {
    addSecond();
    miliSegundo = 0;
    document.getElementById('mili-segundo').innerText = '00';
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