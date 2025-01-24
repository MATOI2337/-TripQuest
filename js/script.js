// 公共配置提取
const commonSwiperConfig = {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
};

// 初始化 Swiper 实例
function initializeSwipers() {
  new Swiper(".swiper-container1", {
    ...commonSwiperConfig,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
  });

  new Swiper(".swiper-container2", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 50,
    slidesOffsetAfter: 200,
  });

  new Swiper(".swiper-container3-1", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: ".swiper-pagination3-1",
  });

  new Swiper(".swiper-container3-2", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: ".swiper-pagination3-2",
  });

  new Swiper(".swiper-container3-3", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: ".swiper-pagination3-3",
  });

  new Swiper(".swiper-container4", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 140,
  });

  new Swiper(".swiper-container5", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetAfter: 130,
  });
}

// 无限滚动功能
function setupInfiniteScroll() {
  const sliderContent = document.getElementById("slider-content");
  if (!sliderContent) return;

  const sliderWidth = sliderContent.offsetWidth;
  const clonedContent = sliderContent.cloneNode(true);
  sliderContent.parentElement.appendChild(clonedContent);

  let currentPosition = 0;

  function scroll() {
    currentPosition -= 1; // 滚动速度
    if (Math.abs(currentPosition) >= sliderWidth) {
      currentPosition = 0; // 重置位置
    }
    sliderContent.style.transform = `translateX(${currentPosition}px)`;
    sliderContent.nextElementSibling.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(scroll);
  }

  scroll();
}


// 事件绑定
window.addEventListener("load", () => {
  initializeSwipers();
  setupInfiniteScroll();

  // const toggleMenuBtn = document.getElementsByClassName("toggleMenu")[0];
  // if (toggleMenuBtn) {
  //   toggleMenuBtn.addEventListener("click", toggleMenu);
  // }
});
