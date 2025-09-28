document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Натисни мене";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    alert("Кнопка нпрацює!");
  });
});
