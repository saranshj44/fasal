const menuBtn = document.querySelector(".menuicon span");
const searchBtn = document.querySelector(".searchicon");
const cancelBtn = document.querySelector(".cancelicon");
const items = document.querySelector(".navitems");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  }
  searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  filter.onclick=()=>{
      document.querySelector(".filter").style.display="block";
  }
  filtercross.onclick=()=>{
      document.querySelector(".filter").style.display="none";
  }