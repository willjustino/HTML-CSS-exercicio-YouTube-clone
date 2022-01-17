let menubtn = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".side-bar");
let videoscontainer = document.querySelector(".videos-container")

menubtn.onclick = function(){
    sidebar.classList.toggle("resize-sidebar");
    videoscontainer.classList.toggle("widen-videos-container");
}
