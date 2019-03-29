let navOptions = document.querySelectorAll('nav a')

function clicked(){
  console.log('clicked')
}

navOptions.forEach( a => a.addEventListener('click', () => clicked()))
