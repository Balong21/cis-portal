const studentRecords = {
    "103874120102": {
        name: "Lloyd Pogi",
        grade: "Grade 5",
        math: "98",
        science: "97",
        english: "99",
        attendance: "100%"
    }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    document.getElementById(sectionId).classList.remove('hidden');
}

function checkProgress() {
    const idInput = document.getElementById('studentID').value;
    const displayArea = document.getElementById('gradeResult');

    if (studentRecords[idInput]) {
        const student = studentRecords[idInput];
        displayArea.innerHTML = `
            <div class="card" style="text-align: left; margin-top: 20px; border-left-color: #1b4d2e;">
                <h4>Report Card: ${student.name}</h4>
                <p><strong>Level:</strong> ${student.grade}</p>
                <hr>
                <p>Math: ${student.math} | Science: ${student.science} | English: ${student.english}</p>
                <p><strong>Attendance:</strong> ${student.attendance}</p>
            </div>
        `;
    } else {
        displayArea.innerHTML = `<p style="color: #d32f2f; margin-top: 15px;">ID not found. Try 103874120102.</p>`;
    }
}