const studentRecords = {
    "200601": {
        name: "Juan Dela Cruz",
        grade: "Grade 6",
        math: "92",
        science: "88",
        english: "95",
        attendance: "98%"
    }
};

function checkProgress() {
    const idInput = document.getElementById('studentID').value;
    const displayArea = document.getElementById('gradeResult');

    if (studentRecords[idInput]) {
        const student = studentRecords[idInput];
        displayArea.innerHTML = `
            <div class="card" style="border-left-color: #27ae60; margin-top: 20px;">
                <h4>Academic Report: ${student.name}</h4>
                <p><strong>Level:</strong> ${student.grade}</p>
                <p><strong>Mathematics:</strong> ${student.math}</p>
                <p><strong>Science:</strong> ${student.science}</p>
                <p><strong>Attendance:</strong> ${student.attendance}</p>
            </div>
        `;
    } else {
        displayArea.innerHTML = `<p style="color: red; margin-top: 20px;">ID not found. Use 200601</p>`;
    }
}