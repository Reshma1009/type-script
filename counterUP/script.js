let heading = document.querySelectorAll( ".counter" );



let typeArr = Array.from( heading );
console.log(typeArr);
typeArr.map( ( item ) => {
  console.log( item );
  let counter = 0;
  let text = item.innerHTML;
  function type() {
    counter++;
    item.innerHTML = counter;
    if (counter == text) {
      clearInterval(stop);
    }
  }
let stop= setInterval(() => {
  type()
}, 100);




})




