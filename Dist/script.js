window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const tgle = document.getElementById("tgle");
  const logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md", "dark:bg-white");
    navbar.classList.remove("bg-transparent");
    tgle.classList.add("text-black");
    logo.classList.add("text-black");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-md", "dark:bg-white");
    tgle.classList.remove("text-black");
    tgle.classList.add("text-white");
    logo.classList.remove("text-black");
    logo.classList.add("text-white");
  }
});
