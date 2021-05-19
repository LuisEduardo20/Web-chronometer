let addTimer;

let timer = 10

let miliSecond = 1
let second = 0
let minute = 0
let hour = 0

// Controle de click pois o setInterval sem isso acumula e fica
// aumentando a velocidade
let clicked = 0

function comeca() {
  if(clicked == 0){

    clicked = 1
    let i = 1

    addTimer = setInterval(() => {

      // Milisecond
      if(miliSecond < 10) {
        document.getElementById('miliSecond').innerText = `0${miliSecond}`
      }
      else if(miliSecond < 99){
        document.getElementById('miliSecond').innerText = `${miliSecond}`
      }
      else if(miliSecond == 100) {
        document.getElementById('miliSecond').innerText = `00`
        miliSecond = 0
        second++
        
        // Second
        if(second < 10) {
          document.getElementById('second').innerText = `0${second}`
        }
        else if(second < 60){
          document.getElementById('second').innerText = `${second}`
        }
        else if(second == 60) {
          document.getElementById('second').innerText = `00`
          second = 0
          minute++
          
          // Minute
          if(minute < 10) {
            document.getElementById('minute').innerText = `0${minute}`
          }
          else if(minute < 60) {
            document.getElementById('minute').innerText = `${minute}`
          }
          else if(minute == 60) {
            document.getElementById('minute').innerText = `00`
            minute = 0
            hour++
            
            // Hour
            if(hour < 10) {
              document.getElementById('hour').innerText = `0${hour}`
            }
            else if(hour < 60) {
              document.getElementById('hour').innerText = `${hour}`
            }

          }

        }

      }

      i++
      miliSecond++
    }, timer)
  }
}

function pause() {
  clearInterval(addTimer)
  clicked = 0
}

function restart() {
  // Reseta tudo
  clearInterval(addTimer)
  miliSecond = 1
  second = 0
  minute = 0
  clicked = 0
  
  document.getElementById('hour').innerText = '00'
  document.getElementById('minute').innerText = '00'
  document.getElementById('second').innerText = '00'
  document.getElementById('miliSecond').innerText = '00'
}