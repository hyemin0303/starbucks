const badgeEl = document.querySelector(".header .badges");
const toTopEl = document.querySelector('#to-top');


//_.trhottle 스크롤 이벤트 작업시 자주사용됨 
//_.trhottle(함수,시간);
window.addEventListener("scroll",_.throttle(function(){ 
  //console.log(window.scrollY); 스크롤하여 지금 현재 몇 px 지점에 위치해 있는지 확인
  if(window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = "none";
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6,{ //0.6초 동안 gsap의 애니메이션이 실행됨
      opacity: 0,
      display: "none"
    });
    //#to-top 버튼 보이기 
    gsap.to('#to-top', .2,{
      x:0 //x축으로 얼마만큼 이동할 것인지
    });
  }else{
    //배지 보이기
    // badgeEl.style.display = "block";
    gsap.to(badgeEl, .6,{ //0.6초 동안 gsap의 애니메이션이 실행됨
      opacity: 1,
      display: "block"
    });
    //#to-top 버튼 숨기기
    gsap.to(toTopEl, .2,{
      x:100 //x축으로 얼마만큼 이동할 것인지
    });
  }
},300));//0.3초


//#to-top 버튼 누르면 상단이동
toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, { //화면의 위치를 0.7초동안 화면의 0px로 이동 
    scrollTo: 0
  });
});









const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index + 1) * .7, //자동 슬라이드 지연시간 0.7, 1.4, 2.1, 2.7
    opacity:1
  });
});

//new Swiper(선택자,옵션) --생성자클래스
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical', //슬라이드종류
  autoplay: true, //자동재생여부
  loop: true //반복재생여부
});

new Swiper('.promotion .swiper-container',{
  slidesPerView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,//슬라이드 1번이 가운데로 오게지정 
  loop: true,
  autoplay: {
    delay:5000 //자동 슬라이드 지연시간
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어가 가능한지 여부
  },
  navigation:{
    prevEl : '.promotion .swiper-perv', //이전버튼
    nextEl : '.promotion .swiper-next'  //다음버튼
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});









const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션 영역이 숨겨져있니?
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion //!가 붙어있으면 반대값이 됨
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add("hide"); //hide라는 클래스명 추가
  }else{
    //보임처리
    promotionEl.classList.remove("hide");
  }
});





// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소 , 시간, 옵션);
  gsap.to(
    selector, //선택자
     random(1.5, 2.5), //애니메이션 동작 시간
     { // 옵션
    y: size ,//y축으로 얼마만큼 움직이면서 애니메이션실행할지
    repeat: -1,//무한반복 설정
    yoyo: true, // 애니메이션이 한번 실행 되고 다시 반복
    ease: Power1.easeInOut,
    delay:random(0, delay) //3초 뒤에 이벤트 시작
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //어떤 지점 에서 감시할 요소가 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()); //특정한 요소를 감시하는 역할
});








