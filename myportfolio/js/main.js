// ityped
ityped.init("#ityped", {
  loop: false,
  strings: ["Welcome to my portfolio!"],
  typeSpeed: 100,
  backSpeed: 80,
  startDelay: 500,
});

// ページトップボタン
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
};

$(window).on("scroll", updateButton);

$(".back-to-top").on("click", (e) => {
  e.preventDefault();

  $("html, body").animate({ scrollTop: 0 }, 600);
});

updateButton();

// fadein
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $(".scrollanime").each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});
