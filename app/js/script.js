document.addEventListener("DOMContentLoaded", () => {
  // === 1. Завантаження даних із JSON через Fetch ===
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Помилка завантаження даних");
      }
      return response.json();
    })
    .then(data => {
      // === 2. Виклик функцій для відображення даних ===
      renderName(data.person);
      renderExperience("experience-container", data.experience);
    })
    .catch(error => {
      console.error("Помилка:", error);
      const errorMsg = document.createElement("div");
      errorMsg.textContent = "⚠️ Не вдалося завантажити дані з файлу data.json.";
      errorMsg.style.color = "red";
      document.body.prepend(errorMsg);
    });

  // === 3. Функція для підстановки імені ===
  function renderName(person) {
    const nameElement = document.getElementById("personName");
    if (nameElement) {
      nameElement.innerHTML = `
        <div class="first">${person.firstName}</div>
        <div class="last">${person.lastName}</div>
      `;
    }
  }

  // === 4. Функція побудови досвіду роботи ===
  function renderExperience(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach(item => {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");
      jobItem.innerHTML = `
        <div class="job-header">
            <div class="job-title">${item.title}</div>
        </div>
        <div class="company-row">
            <div class="job-date">${item.date}</div>
            <div class="company">${item.company}</div>
        </div>
        <div class="job-description">${item.description}</div>
      `;
      container.appendChild(jobItem);
    });
  }

  // === 5. Подія для contact-info ===
  const contactArrow = document.querySelector(".contact-info .arrow");
  if (contactArrow) {
    contactArrow.addEventListener("click", () => {
      const content = contactArrow
        .closest(".contact-info")
        .querySelector(".block-content");
      content.classList.toggle("active");
      contactArrow.classList.toggle("rotate");
    });
  }
});
