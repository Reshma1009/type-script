let typeText = document.querySelectorAll( ".type_text" );
let typeArr = Array.from( typeText );


typeArr.map( ( item ) => {
  let counter = 0;
  function typeJs() {
    item.innerHTML += item.dataset.text.charAt( counter++ );
    
    if (counter == item.dataset.text) {
      clearInterval(stop);
    }
  };
  let stop = setInterval(() => {
    typeJs();
  }, item.dataset.time / item.dataset.text);



})












