document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white", "shadow-md", "text-slate-600");
      navbar.classList.remove("bg-transparent");
      updateNavbarTextColor("text-gray-950", "text-gray-950");
    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navbar.classList.add("bg-transparent");
      updateNavbarTextColor("text-white", "text-slate-950");
    }
  });
});

// counter
var a = 0;
$(window).scroll(function () {
  if ($("#counter").length) {
    // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  }
});

// slider
var swiper_thumbs = new Swiper(".nav-for-slider", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
});
var swiper = new Swiper(".main-slide-carousel", {
  slidesPerView: 1,
  effect: "fade",
  thumbs: {
    swiper: swiper_thumbs,
  },
});

// Get references to elements
const gallery = document.querySelector(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close");

// Add event listener to each image
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-image")) {
    const imageSrc = e.target.src;
    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";
  }
});

// Close lightbox when close button is clicked
closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
