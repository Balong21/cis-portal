const studentRecords = {
    "103874120102": { name: "Lloyd Pogi", grade: "Grade 5", math: "98", science: "97", english: "99", attendance: "100%" }
};

const instructorStudents = {
    "Mrs. Reyes": ["Juan Dela Cruz", "Maria Clara", "Pedro Penduko"],
    "Mr. Bautista": ["Lloyd Pogi", "Angel Locsin", "Ricardo Dalisay"],
    "Ms. Gomez": ["Liza Soberano", "Enrique Gil", "Kathryn Bernardo"],
    "Mr. Santos": ["Jose Rizal", "Andres Bonifacio"],
    "Coach Dela Cruz": ["Manny Pacquiao", "Kai Sotto"],
    "Nurse Anne": ["Health Club Member A"]
};

function enterSection(sectionId) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
    document.getElementById('portal-home').style.display = 'flex';
    document.getElementById('portal-content').classList.add('hidden');
}

function showStudents(teacherName) {
    const modal = document.getElementById('student-modal');
    document.getElementById('modal-teacher-name').innerText = "Students of " + teacherName;
    const list = document.getElementById('student-list');
    list.innerHTML = ""; 
    instructorStudents[teacherName].forEach(student => {
        let li = document.createElement('li');
        li.innerText = "• " + student;
        list.appendChild(li);
    });
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('student-modal').classList.add('hidden');
}

function checkProgress() {
    const id = document.getElementById('studentID').value;
    const res = document.getElementById('gradeResult');
    if (studentRecords[id]) {
        const s = studentRecords[id];
        res.innerHTML = `<div class="card" style="margin-top: 20px;"><h4>Welcome, ${s.name}!</h4><p>Level: ${s.grade}</p><hr><p>Math: ${s.math} | Science: ${s.science}</p></div>`;
    } else {
        res.innerHTML = `<p style="color:red; margin-top:10px;">ID not found.</p>`;
    }
}