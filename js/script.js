document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    const pandaVideo = document.querySelector('.section-hero__panda');
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      const animationTime = 400;
      preloader.style.transition = animationTime + 'ms';
      preloader.style.opacity = '0';
      setTimeout(() => {
        document.body.classList.remove('_preloader');
        if (pandaVideo) {
          pandaVideo.play();
        }
      }, animationTime);
    } else {
      if (pandaVideo) {
        pandaVideo.play();
      }
    }
  };

  document.querySelectorAll(".faq-item__header").forEach(function (item) {
    item.addEventListener("click", function () {
      if (!this.closest('.faq-item').classList.contains("_active")) {
        document.querySelectorAll(".faq-item._active").forEach(function (activeItem) {
          activeItem.classList.remove('_active');
          activeItem.querySelector(".faq-item__content").style.maxHeight = null;
        })
        this.closest('.faq-item').classList.toggle("_active");
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        this.closest('.faq-item').classList.toggle("_active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    });
  });

  const menuBtn = document.querySelector('.btn-menu');
  const headerMenu = document.querySelector('.header-menu');
  menuBtn.addEventListener("click", function () {
    headerMenu.classList.toggle('_active');
    menuBtn.classList.toggle('_active');
    document.body.classList.toggle('_menu-active');
  });

  const bpMainVideo = document.querySelector('.bp-main-video');
  if (bpMainVideo) {
    bpMainVideo.addEventListener('click', function (e) {
      e.preventDefault();
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
      })
    })
  }
});