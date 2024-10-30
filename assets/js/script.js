$(document).ready(function(){
    $('#carousel1').slick({
      infinite: true,  // Enables infinite looping
      slidesToShow: 3, // Number of slides to show at a time
      slidesToScroll: 1, // Number of slides to scroll at a time
      dots: false,      // Shows navigation dots
      arrows: true,    // Shows next/prev arrows
      autoplay: true,  // Enables auto-scrolling
      autoplaySpeed: 2000, // Auto-scroll speed (in ms)
      gap: 24,         // Space between slides (in px)
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      prevArrow: `<button type="button" class="slick-prev"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#3B82F6"/>
<path d="M31.5 21.5L25 28L31.5 34.5" stroke="#3B82F6" stroke-width="2"/>
</svg>
</button>`,
    nextArrow: `<button type="button" class="slick-next"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#3B82F6"/>
<path d="M25 21.5L31.5 28L25 34.5" stroke="#3B82F6" stroke-width="2"/>
</svg>
</button>`
    });
  });