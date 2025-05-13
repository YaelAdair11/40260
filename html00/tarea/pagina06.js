const picture = (id, name) => {
  const url = `https://picsum.photos/id/${id}/200/200`;
  return `
    <figure>
      <img src="${url}" alt="${name}" class="redonda">
      <figcaption>${name}</figcaption>
    </figure>
  `;
};

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = picture(1, "John") + picture(2, "Jane");
  const lista = app.querySelectorAll("img");
  lista.forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("redonda");
    });
  });
});
