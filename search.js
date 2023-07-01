const searchIcon =document.querySelector(".search-icon i");
const searchInputwrapper =document.querySelector(".search-input-wrapper");
const searchInput =document.querySelector(".search-input input");
const searchdisease =document.querySelector(".search-icon h3");
const colseIcon =document.querySelector(".search-input i");
searchIcon.addEventListener('click',() =>{
    searchIcon.parentElement.classList.add("change");
    searchInputwrapper.classList.add("change");
  })
searchdisease.addEventListener('click',() =>{
    searchdisease.parentElement.classList.add("change1");
    searchInputwrapper.classList.add("change1");
})
colseIcon.addEventListener('click',()=>{
    searchIcon.parentElement.classList.remove("change");
    searchInputwrapper.classList.remove("change");
    searchdisease.parentElement.classList.remove("change1");
    searchInputwrapper.classList.remove("change1");
})