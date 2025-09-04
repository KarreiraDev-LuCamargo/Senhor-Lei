/* 🔹 Como funciona

O setInterval chama next() a cada 5 segundos (5000 ms).

Se o usuário clicar em uma seta, o autoplay é reiniciado → evita “briga” entre clique manual e automático.

Continua suave porque o CSS (opacity + transform) já está cuidando da animação.*/

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const slides = document.querySelectorAll(".slider");

  if (!prevButton || !nextButton || !slides.length) return;

  let current = 0;
  let autoPlayInterval;

  function show(i) {
    slides.forEach((s) => s.classList.remove("on"));
    slides[i].classList.add("on");
  }

  function next() {
    current = (current + 1) % slides.length;
    show(current);
  }

  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    show(current);
  }

  // Navegação manual
  nextButton.addEventListener("click", () => {
    next();
    resetAutoplay();
  });
  prevButton.addEventListener("click", () => {
    prev();
    resetAutoplay();
  });

  // Autoplay
  function startAutoplay() {
    autoPlayInterval = setInterval(next, 5000); // muda a cada 5 segundos
  }

  function resetAutoplay() {
    clearInterval(autoPlayInterval);
    startAutoplay();
  }

  // Inicialização
  show(current);
  startAutoplay();
});
