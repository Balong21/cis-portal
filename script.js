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

function enterSection(sectionId) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById('portal-home').style.display = 'flex';
    document.getElementById('portal-content').classList.add('hidden');
}

function checkProgress() {
    const id = document.getElementById('studentID').value;
    const res = document.getElementById('gradeResult');
    
    if (studentRecords[id]) {
        const s = studentRecords[id];
        res.innerHTML = `
            <div class="card" style="margin-top: 20px;">
                <h4>Welcome, ${s.name}!</h4>
                <p>Level: ${s.grade}</p>
                <hr>
                <p>Math: ${s.math} | Science: ${s.science} | English: ${s.english}</p>
                <p>Attendance: ${s.attendance}</p>
            </div>
        `;
    } else {
        res.innerHTML = `<p style="color:red; margin-top:10px;">ID not found.</p>`;
    }
}