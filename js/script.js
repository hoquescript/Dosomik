//TODO: Sidebar

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebarBtn");

function sideBarToggler() {
  sidebar.classList.toggle("sidebar--active");
}
sidebarBtn.addEventListener("click", sideBarToggler);

//Menu Expand
const sublist = document.querySelectorAll(".sublink");
const list = document.querySelectorAll("sidenav__item");

function menuExpand(e) {
  const sublink = this.lastElementChild;
  console.log(sublink);

  if (sublink.style.display === "block") {
    sublink.style.display = "none";
  } else {
    sublink.style.display = "block";
  }


    // if (sublink.style.maxHeight){
    //   sublink.style.maxHeight = null;
    // } else {
    //   sublink.style.maxHeight = sublink.scrollHeight + "px";
    // } 

  // e.preventDefault();
}

sublist.forEach(function(el) {
  el.addEventListener("click", menuExpand);
});
