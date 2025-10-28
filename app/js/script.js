document.addEventListener("DOMContentLoaded", () => {
    const fullName = `
        <div class="first">JHON</div>
        <div class="last">ABIRAR</div>
    `;
    const nameElement = document.getElementById("personName");
    if (nameElement) {
        nameElement.innerHTML = fullName;
    }
    const contactArrow = document.querySelector(".contact-info .arrow");
    if (contactArrow) {
        contactArrow.addEventListener("click", () => {
            const content = contactArrow.closest(".contact-info").querySelector(".block-content");
            content.classList.toggle("active");  
            contactArrow.classList.toggle("rotate"); 
        });
    }
    const experienceData = [
    {
        title: "Enter Job Position Here",
        company: "Company Name / Location",
        date: "Present",
        description: "Lorem Ipsum dolor sit amet, this is a thema consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        title: "Enter Job Position Here",
        company: "Company Name / Location",
        date: "2017 - 2019",
        description: "Lorem Ipsum dolor sit amet, this is a thema consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
   {
        title: "Enter Job Position Here",
        company: "Company Name / Location",
        date: "2017 - 2019",
        description: "Lorem Ipsum dolor sit amet, this is a thema consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
];
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
                <div class="job-description">
                    ${item.description}
                </div>
            `;
            container.appendChild(jobItem);
        });
    }
    renderExperience("experience-container", experienceData);
});
