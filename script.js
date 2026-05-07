const studentRecords = {
    "103874120102": { name: "Lloyd Pogi", math: "98", science: "97" }
};

function enterSection(sectionId) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    
    // Hide all internal sections, then show the specific one
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
    document.getElementById('portal-home').style.display = 'flex';
    document.getElementById('portal-content').classList.add('hidden');
}

function checkProgress() {
    const id = document.getElementById('studentID').value;
    const res = document.getElementById('gradeResult');
    if (studentRecords[id]) {
        res.innerHTML = `<p style="color:green; font-weight:bold;">Welcome, ${studentRecords[id].name}!</p>`;
    } else {
        res.innerHTML = `<p style="color:red;">Invalid Student ID</p>`;
    }
}