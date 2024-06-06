// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// fungsi menutup alert
function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.classList.add("hidden");
}

// contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjDDct_jjaexcWtJRF0kmSRk-Hxy-dP8PTgJKNxMV9dfG5-x85ATxOou3QW6RYNsz8/exec";
const form = document.forms["rangga-contact-form"];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik berubah menjadi tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // menampilkan alert
      myAlert.classList.toggle('hidden');
      // reset formnya
      form.reset();
      console.log("Success!", response)
    })
    .catch((error) => console.error("Error!", error.message));
});
