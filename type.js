let typeText = document.querySelector( ".type" );
let text = typeText.innerHTML;

let counter = 0;

typeText.innerHTML=""
function typeJs() {
   typeText.innerHTML += text.charAt(counter++);
  if ( counter == text.length ) {
    clearInterval( stop );
  }
}


let stop= setInterval(() => {
  typeJs()
}, 100);












