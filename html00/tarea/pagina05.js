function imagen(id) {
  return `
    <figure>
      <img src="https://picsum.photos/id/${id}/200/200" alt="x">
      <figcaption>John</figcaption>
    </figure>
  `;
}

const Picture = (id) => {
  return `
    <figure>
      <img src="https://picsum.photos/id/${id}/200/200" alt="x">
      <figcaption>Jane</figcaption>
    </figure>
  `;
};

window.addEventListener("DOMContentLoaded", () => {
  const ejemplo = document.getElementById("demo");
  ejemplo.innerHTML = "hola" + imagen(1) + Picture(2);
});
