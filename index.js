const img = document.querySelector(".wanda");
const container = document.querySelector(".container");
const div = document.querySelector(".divRight");
const divLeft = document.querySelector(".divLeft");

img.addEventListener("mouseover", () => {
  const raio1 = document.querySelector(".raio");
  const raio2 = document.querySelector(".raio2");
  raio1.style.opacity = "1";
  raio2.style.opacity = "1";
});
img.addEventListener("mouseleave", () => {
  const raio1 = document.querySelector(".raio");
  const raio2 = document.querySelector(".raio2");

  raio1.style.opacity = "0";
  raio2.style.opacity = "0";
});

container.addEventListener("click", (e) => {

  div.innerHTML =
    "<iframe class='video' src='https://www.youtube.com/embed/aWzlQ2N6qqg?start=6' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    const video = document.querySelector(".video");
    video.style.opacity = "1";

});