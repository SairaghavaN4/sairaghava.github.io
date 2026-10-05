const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const d = document.documentElement;
  const p = d.scrollTop / (d.scrollHeight - d.clientHeight) * 100;
  progress.style.width = `${Math.max(0, Math.min(100, p))}%`;
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const close = document.getElementById("closeLightbox");

document.querySelectorAll(".shot img, .feature-shot img, .automation-visual img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
function closeBox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}
close.addEventListener("click", closeBox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeBox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeBox(); });
