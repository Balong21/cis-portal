const studentRecords = {
    "103874120102": { name: "Lloyd Pogi", grade: "Grade 5", math: "98", science: "97", english: "99" }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    // Scroll smoothly to the content
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function checkProgress() {
    const id = document.getElementById('studentID').value;
    const res = document.getElementById('gradeResult');
    if (studentRecords[id]) {
        res.innerHTML = `<div style="margin-top:15px; color:green;">Welcome, ${studentRecords[id].name}! Grades: Math ${studentRecords[id].math}</div>`;
    } else {
        res.innerHTML = `<p style="color:red;">Invalid ID</p>`;
    }
}