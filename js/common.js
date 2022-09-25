const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input"); //search 안에 있는 input 찾기

searchEl.addEventListener("click",function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus",function(){
  searchEl.classList.add('focused'); //focused 라는 클래스명을 추가하겠다.
  searchInputEl.setAttribute('placeholder','통합검색'); // html 속성을 지정할때
});

searchInputEl.addEventListener("blur",function(){ //포커스가 해제되면 blur
  searchEl.classList.remove('focused'); //focused 라는 클래스명을 삭제하겠다.
  searchInputEl.setAttribute('placeholder',''); 
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022


