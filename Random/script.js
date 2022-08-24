let heading = document.querySelectorAll(".heading");

let arrCount = Array.from( heading );


arrCount.map( ( item ) => {
  console.log( item.dataset.target );
  let count = 0;
  function counter () {
    count++
    item.innerHTML = count;
    if ( count == item.dataset.target ) {
      clearInterval(stop)
    }
  }
   let stop = setInterval(() => {
     counter();
   }, item.dataset.time / item.dataset.target);

})












