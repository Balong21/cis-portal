let currentLoginType = "";

const studentDB = {
    "103874120102": { name: "Lloyd Pogi", pass: "123", grade: "Grade 5", math: "98", science: "97" }
};

const instructorDB = {
    "admin_1": { name: "Mrs. Reyes", pass: "admin123" }
};

const instructorStudents = {
    "Mrs. Reyes": ["Juan Dela Cruz", "Maria Clara"],
    "Mr. Bautista": ["Lloyd Pogi", "Ricardo Dalisay"],
    "Ms. Gomez": ["Liza Soberano", "Enrique Gil"],
    "Mr. Santos": ["Jose Rizal", "Andres Bonifacio"],
    "Coach Dela Cruz": ["Manny Pacquiao", "Kai Sotto"],
    "Nurse Anne": ["Health Club Member A"]
};

function openLogin(type) {
    currentLoginType = type;
    document.getElementById('login-type-header').innerText = type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('userID').value = "";
    document.getElementById('userPass').value = "";
}

function togglePass() {
    const p = document.getElementById('userPass');
    p.type = p.type === "password" ? "text" : "password";
}

function validateLogin() {
    const id = document.getElementById('userID').value;
    const pass = document.getElementById('userPass').value;
    const err = document.getElementById('loginError');

    let db = (currentLoginType === 'student') ? studentDB : instructorDB;

    if (db[id] && db[id].pass === pass) {
        err.innerText = "";
        closeLoginModal();
        document.getElementById('portal-home').style.display = 'none';
        document.getElementById('portal-content').classList.remove('hidden');
        
        const target = (currentLoginType === 'student') ? 'tracker' : 'teachers';
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(s => s.style.display = 'none');
        document.getElementById(target).style.display = 'block';

        if(currentLoginType === 'student') {
            document.getElementById('gradeResult').innerHTML = `<div class="card"><h4>Welcome, ${db[id].name}</h4><p>Math: ${db[id].math}</p></div>`;
        }
    } else {
        err.innerText = "Invalid ID or Password!";
    }
}

function showStudents(teacherName) {
    const modal = document.getElementById('student-modal');
    document.getElementById('modal-teacher-name').innerText = "Students of " + teacherName;
    const list = document.getElementById('student-list');
    list.innerHTML = "";
    instructorStudents[teacherName].forEach(s => {
        let li = document.createElement('li');
        li.innerText = "• " + s;
        list.appendChild(li);
    });
    modal.classList.remove('hidden');
}

function closeModal() { document.getElementById('student-modal').classList.add('hidden'); }
function goBack() { document.getElementById('portal-home').style.display = 'flex'; document.getElementById('portal-content').classList.add('hidden'); }