let button = document.querySelectorAll( "button" );
let btnArr = Array.from( button );
let closeBtn = document.querySelector( ".close" );
 console.log(closeBtn);

btnArr.map( ( item ) => {
  
  console.log(item.dataset.close);
  let modalview = document.querySelector( item.dataset.target );
  let closeBtn = document.querySelector(item.dataset.close);
  

  item.addEventListener("click", () => {
    modalview.style.transform = "scale(1)";
  });
  closeBtn.addEventListener("click", () => {
    modalview.style.transform = "scale(0)";
  });
})

