// =============== DARK MODE TOGGLE ===============
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button label depending on mode
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});


document.getElementById("themeBtn").textcontent="Light Mode";

// =============== EDIT JOB TITLE ===============
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

editJobBtn.addEventListener("click", function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle.trim();
    }
});


// =============== SHOW / HIDE SKILLS ===============
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.querySelector(".skills-section");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});


// =============== CHARACTER COUNTER FOR TEXTAREA ===============
const msgBox = document.getElementById("message");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    const max = 200;
    const used = msgBox.value.length;
    const remain = max - used;
    counter.textContent = remain;
});


// =============== FORM VALIDATION ===============
const form = document.querySelector("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

form.addEventListener("submit", function (event) {
    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
        alert("Name and Email are required.");
        event.preventDefault();
        return false;
    }

    alert("Message sent successfully!");
});


// =============== AUTO DISPLAY DATE IN FOOTER ===============
const dateDisplay = document.getElementById("dateDisplay");

if (dateDisplay) {
    const today = new Date().toDateString();
    dateDisplay.textContent = "Today is: " + today;
}
