const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");

if (!localStorage.getItem("displayToast")) {
  setTimeout(() => {
    toastContainer.classList.add("active");
  }, 1000);
}

const stopDisplayingToast = () => {
  localStorage.setItem("displayToast", false);
  toastContainer.classList.remove("active");
};

closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);
