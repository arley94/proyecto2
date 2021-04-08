const progress = document.getElementById('progreso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const bolas = document.querySelectorAll('.bolas')

let currentActive = 0;

next.addEventListener('click', () => {

  if(currentActive < 3)
  {
    currentActive++;
  }

  update();
})

prev.addEventListener('click', () => {

  if(currentActive > 0)
  {
    currentActive--;
  }

  update();
})

function update() {
  bolas.forEach((currentElement, index) => {
    if(index <= currentActive)
    {
      currentElement.classList.add('activa');  
    }
    else
    {
      currentElement.classList.remove('activa');
    }
  })

  let ancho = currentActive/3*100;

  progress.style.width = ancho + '%';

  if(currentActive==0) {
    prev.disabled = true;
  } else if(currentActive==3) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

}