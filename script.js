const resumeForm = document.getElementById("resumeForm");
const generatedResume = document.getElementById("generatedResume");

resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;
    const resumeText = `Nome: ${name}\nEmail: ${email}\nExperiência:\n${experience}`;
    generatedResume.textContent = resumeText;
});
