const header = document.getElementById("header");

window.onscroll = function () {
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
};
