document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".js-menuToggle");
    const mobileMenuLevelZero = document.querySelector(".js-pushmobileMenu");
  
    const openLevel = document.querySelectorAll(".js-openLevel");
    const closeLevel = document.querySelectorAll(".js-closeLevel");
    const navOverlay = document.querySelector(".js-navOverlay");
  
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
  
      mobileMenuLevelZero.classList.toggle("isOpen");
      menuToggle.classList.toggle("cross");
      navOverlay.classList.toggle("active");
    });
  
    openLevel.forEach(function (item) {
      item.addEventListener("click", function () {
        let nextNavLevel = this.nextElementSibling;
        if (nextNavLevel) {
          nextNavLevel.classList.toggle("isOpen");
        }
      });
    });
  
    closeLevel.forEach(function (item) {
      item.addEventListener("click", function () {
        let parentNavLevel = this.closest(".js-pushNavLevelBack");
        if (parentNavLevel) {
          parentNavLevel.classList.remove("isOpen");
        }
      });
    });
  });