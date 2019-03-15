var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectAlumnusButtons = document.querySelectorAll(".button");



for (var i = 0; i < selectAlumnusButtons.length; i++) {
  selectAlumnusButtons[i].addEventListener("click", function() {
    modal.classList.add("open");
    backdrop.style.display='block';
    setTimeout(function(){
  backdrop.classList.add("open");
  },5);

  });
}

backdrop.addEventListener("click", function() {
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.style.display='none';
  setTimeout(function(){
  backdrop.classList.remove("open");
  },5);
}


