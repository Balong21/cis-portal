const studentRecords = {
    "200601": {
        name: "Juan Dela Cruz",
        grade: "Grade 6",
        math: "92",
        science: "88",
        english: "95",
        attendance: "98%"
    },
    "200602": {
        name: "Maria Santos",
        grade: "Grade 4",
        math: "85",
        science: "90",
        english: "89",
        attendance: "94%"
    },
    "200603": {
        name: "Lloyd Pogi",
        grade: "Grade 5",
        math: "98",
        science: "97",
        english: "99",
        attendance: "100%"
    }
};

function checkProgress() {
    const idInput = document.getElementById('studentID').value;
    const displayArea = document.getElementById('gradeResult');

    if (studentRecords[idInput]) {
        const student = studentRecords[idInput];
        displayArea.innerHTML = `
            <div class="card" style="border-left-color: #27ae60; margin-top: 20px; text-align: left;">
                <h4>Academic Report: ${student.name}</h4>
                <p><strong>Level:</strong> ${student.grade}</p>
                <hr>
                <p><strong>Mathematics:</strong> ${student.math}</p>
                <p><strong>Science:</strong> ${student.science}</p>
                <p><strong>English:</strong> ${student.english}</p>
                <p><strong>Attendance:</strong> ${student.attendance}</p>
            </div>
        `;
    } else {
        displayArea.innerHTML = `<p style="color: #e74c3c; margin-top: 20px; font-weight: bold;">ID not found. Please check the ID or contact the office.</p>`;
    }
}