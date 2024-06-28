document.addEventListener("DOMContentLoaded", function() {
    let testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showNextTestimonial() {
        testimonials[index].classList.remove('active');
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add('active');
    }

    setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds
});
