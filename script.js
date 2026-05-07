const studentRecords = {
    "103874120102": { name: "Lloyd Pogi", grade: "Grade 5", math: "98" }
};

// Function to "ENTER" a section
function enterSection(sectionId) {
    // 1. Hide the entire home screen
    document.getElementById('portal-home').classList.add('hidden');
    
    // 2. Show the content container
    document.getElementById('portal-content').style.display = 'block';
    
    // 3. Hide all sections first, then show the one clicked
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    
    window.scrollTo(0, 0); // Reset scroll to top
}

// Function to go BACK to the home menu
function goBack() {
    document.getElementById('portal-home').classList.remove('hidden');
    document.getElementById('portal-content').style.display = 'none';
}

function checkProgress() {
    const id = document.getElementById('studentID').value;
    const res = document.getElementById('gradeResult');
    if (studentRecords[id]) {
        res.innerHTML = `<div style="margin-top:20px; color:green; font-weight:bold;">Welcome, ${studentRecords[id].name}!</div>`;
    } else {
        res.innerHTML = `<p style="color:red; margin-top:10px;">ID not found.</p>`;
    }
}