let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let containerTestimonials = document.getElementsByClassName(
    "container-testimonial"
  );
  let avatars = document.getElementsByClassName("avatar");

  if (n > containerTestimonials.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = containerTestimonials.length;
  }

  for (i = 0; i < containerTestimonials.length; i++) {
    containerTestimonials[i].style.display = "none";
  }
  for (i = 0; i < avatars.length; i++) {
    avatars[i].className = avatars[i].className.replace(" avatar__active", "");
  }
  containerTestimonials[slideIndex - 1].style.display = "block";
  avatars[slideIndex - 1].className += " avatar__active";
}
