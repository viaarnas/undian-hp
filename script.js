const link = "https://wasiatpin.com/?ref=pakeja";
document.querySelectorAll(".links").forEach(function(a) {
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
});

const modalBtn = document.getElementById("cara");
const showModal = document.getElementById("modal");
modalBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showModal.style.display = "flex";
});
    
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showModal.style.display = "none";
});
    
const showPic = document.getElementById("gambar");
showPic.addEventListener("click", function(e) {
    e.preventDefault();
    showModal.style.display = "flex";
});

showModal.addEventListener("click", function(e) {
    if (e.target === showModal) {
    showModal.style.display = "none";
    }
});
    
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
    showModal.style.display = "none";
    }
});
