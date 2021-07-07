// EMAIL MODAL SCRIPT OPEN/CLOSE


// check to see if I'm connected
console.log("hello word");


// variables
const modal = document.getElementById("myForm");
const modalButton = document.querySelector(".click-button");
const modalClose = document.querySelector(".noThanks");


// clicking on button, opens the modal
modalButton.addEventListener("click", function(e) {
  modal.style.display = "block";
  console.log("clicked!!!");
});

// clicking on no thanks button, closes the modal
modalClose.addEventListener("click", function(e){
  modal.style.display = "none";
  console.log("no thanks!");
})

// modal may not be accessible? Can tab through but unsure because I used display:none.