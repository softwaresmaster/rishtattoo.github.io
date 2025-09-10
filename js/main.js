// Navbar Scroll Effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

// Initialize Isotope for Portfolio Filtering
$(document).ready(function () {
  // Portfolio isotope and filter
  var $portfolioGrid = $(".portfolio-grid").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".portfolio-filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $portfolioGrid.isotope({ filter: filterValue });
  });

  // Change active class on filter buttons
  $(".portfolio-filter button").on("click", function () {
    $(".portfolio-filter button").removeClass("active");
    $(this).addClass("active");
  });

  // Portfolio Modal
  $(".portfolio-card").click(function () {
    var imgSrc = $(this).find("img").attr("src");
    var title = $(this).find("h3").text();
    var desc = $(this).find("p").text();

    $("#portfolioModalImg").attr("src", imgSrc);
    $("#portfolioModalLabel").text(title);
    $("#portfolioModalDesc").text(desc);

    var portfolioModal = new bootstrap.Modal(
      document.getElementById("portfolioModal")
    );
    portfolioModal.show();
  });

  // Smooth scrolling for all links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Initialize all tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Animation on scroll
  function animateOnScroll() {
    $(".animate__animated").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight > position) {
        var animationClass = $(this).attr("data-animation");
        $(this).addClass(animationClass);
      }
    });
  }

  // Run on page load
  animateOnScroll();

  // Run on scroll
  $(window).scroll(function () {
    animateOnScroll();
  });
});

// Form Submission
$("#contactForm").submit(function (e) {
  e.preventDefault();
  var formData = $(this).serialize();

  // Here you would typically send the form data to a server
  // For demo purposes, we'll just show an alert
  alert("Thank you for your message! We will get back to you soon.");
  $(this).trigger("reset");
});
