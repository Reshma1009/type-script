let heading = document.querySelectorAll( ".counter" );

let text = heading.innerHTML;

let typeArr = Array.from( heading );
console.log(typeArr);
typeArr.map( ( item ) => {
  console.log( item );
  let counter = 0;
  function type() {
    counter++;
    item.innerHTML = counter;
    if ( counter == item.length ) {
      clearInterval(stop)
    }
  }
let stop= setInterval(() => {
  type()
}, 100);




})




