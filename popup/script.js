let button = document.querySelectorAll( "button" );
let btnArr = Array.from( button );

btnArr.map( ( item ) => {
  
  let modalview = document.querySelector( item.dataset.target );
  let closeBtn = document.querySelector(item.dataset.close);
  
  
  item.addEventListener("click", () => {
    modalview.style.transform = "scale(1)";
  });
  closeBtn.addEventListener("click", () => {
    modalview.style.transform = "scale(0)";
  });
})

