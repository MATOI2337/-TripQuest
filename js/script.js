"use script";
let count = true;
let count1 = true;
window.onload = function () {
  var mySwiper = new Swiper(".swiper-container1", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    // pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  });

  var mySwiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 180,
  });

  var mySwiper31 = new Swiper(".swiper-container3-1", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-1",
  });

  var mySwiper32 = new Swiper(".swiper-container3-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-2",
  });

  var mySwiper33 = new Swiper(".swiper-container3-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-3",
  });

  var mySwiper4 = new Swiper(".swiper-container4", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 140,
  });

  var mySwiper5 = new Swiper(".swiper-container5", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetAfter: 130,
  });
};

// script.js

// 获取触发按钮和菜单的DOM元素
// const menuIcon = document.getElementById("menuIcon");
// const menu = document.getElementById("menu");
// 监听点击事件，点击按钮时切换菜单的可见状态
// menuIcon.addEventListener("click", () => {
//   menu.classList.toggle("active"); // 切换菜单的显示/隐藏
// });

// 关闭菜单的逻辑（点击页面其他地方关闭菜单）
// document.addEventListener("click", (event) => {
//   const isClickInside =
//     menu.contains(event.target) || menuIcon.contains(event.target);
//   if (!isClickInside) {
//     menu.classList.remove("active"); // 关闭菜单
//   }
// });

function closeContactPannel() {
  document.getElementById("b1_pannel").style.display = "none";
}

function openContactPannel(className) {
  let next3;
  let mb2;
  let contactlist;
  if (className == "b1") {
    next3 = document.getElementById("b1next3");
    mb2 = document.getElementsByClassName("b1mb2")[0];
    contactlist = document.getElementsByClassName(className)[0];
  } else if (className == "b2") {
    next3 = document.getElementById("b2next3");
    mb2 = document.getElementsByClassName("b2mb2")[0];
    contactlist = document.getElementsByClassName(className)[0];
  }

  if (count1) {
    next3.style.transform = `rotate(90deg)`;
    mb2.style.height = "573px";
    mb2.style.width = "353px";
    contactlist.style.width = "353px";
    contactlist.style.borderRadius = "40px 40px 0 0";
  } else {
    next3.style.transform = `rotate(0deg)`;
    mb2.style.height = "0px";
    mb2.style.width = "227px";
    contactlist.style.width = "227px";
    contactlist.style.borderRadius = "40px 40px 40px 0";
  }
  count1 = !count1;
}

function inputbtn() {
  document.getElementsByClassName("fileInput")[0].click();
}

function closePannel() {
  commonIcon();
  const menu = document.getElementById("menu");
  menu.classList.remove("show");
}

function toggleMenu() {
  commonIcon();
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function commonIcon() {
  const toggleBtn = document.getElementsByClassName("toggleMenu")[0];
  const menu = document.getElementsByClassName("menu")[0];
  if (count) {
    toggleBtn.style.transform = `rotate(90deg)`;
    menu.classList.add("animate__fadeInRight");
    menu.classList.remove("animate__fadeOutLeft");
  } else {
    menu.classList.add("animate__fadeOutLeft");
    menu.classList.remove("animate__fadeInRight");
    toggleBtn.style.transform = `rotate(0deg)`;
  }
  count = !count;
}

function changeImg() {
  document.getElementById("bf_img").setAttribute("src", "./images/a2.jpg");
}
// 关闭菜单
// closeButton.addEventListener("click", () => {
//   menu.classList.remove("show");
// });
function smoothScrollToAnchor(anchorId, isMenu = true, additionalOffset = 70) {
  isMenu && toggleMenu();
  const element = document.getElementById(anchorId);
  if (!element) return;
  setTimeout(() => {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const finalPosition = targetPosition - additionalOffset;

    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(element);

    setTimeout(() => {
      observer.unobserve(element);
    }, 500);
  }, 200);
}


window.onload = function () {
  var mySwiper = new Swiper(".swiper-container1", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    // pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  });

  var mySwiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 180,
  });

  var mySwiper31 = new Swiper(".swiper-container3-1", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-1",
  });

  var mySwiper32 = new Swiper(".swiper-container3-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-2",
  });

  var mySwiper33 = new Swiper(".swiper-container3-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    // direction: 'vertical',
    // loop: true,

    // 如果需要分页器
    pagination: ".swiper-pagination3-3",
  });

  var mySwiper4 = new Swiper(".swiper-container4", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 140,
  });

  var mySwiper5 = new Swiper(".swiper-container5", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetAfter: 130,
  });
};
