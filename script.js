let currentLoginType = "";

const userDatabase = {
    "103874120102": { name: "Lloyd Pogi", pass: "student123", role: "student", math: "98", science: "97" },
    "103874120103": { name: "Maria Clara", pass: "pass456", role: "student", math: "88", science: "92" },
    "teacher_reyes": { name: "Mrs. Reyes", pass: "reyes2026", role: "instructor" },
    "teacher_bautista": { name: "Mr. Bautista", pass: "math101", role: "instructor" }
};

const instructorStudents = {
    "Mrs. Reyes": ["Juan Dela Cruz", "Maria Clara", "Pedro Penduko"],
    "Mr. Bautista": ["Lloyd Pogi", "Angel Locsin", "Ricardo Dalisay"]
};

function openLogin(type) {
    currentLoginType = type.toLowerCase();
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('login-type-label').innerText = type;
    document.getElementById('loginError').innerText = "";
}

function togglePass() {
    const p = document.getElementById('userPass');
    p.type = p.type === "password" ? "text" : "password";
}

function validateLogin() {
    const id = document.getElementById('userID').value;
    const pass = document.getElementById('userPass').value;
    const err = document.getElementById('loginError');

    const user = userDatabase[id];

    if (user && user.pass === pass) {
        if (user.role === currentLoginType || (currentLoginType === 'administrator' && user.role === 'instructor')) {
            showPortalContent(user);
        } else {
            err.innerText = "Access Denied: Wrong Portal";
        }
    } else {
        err.innerText = "Invalid ID or Password!";
    }
}

function showPortalContent(user) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');

    if (user.role === 'student') {
        document.getElementById('tracker').style.display = 'block';
        document.getElementById('gradeResult').innerHTML = `
            <div class="card">
                <h4>Welcome back, ${user.name}!</h4>
                <p><strong>Math:</strong> ${user.math}</p>
                <p><strong>Science:</strong> ${user.science}</p>
            </div>`;
    } else {
        document.getElementById('teachers').style.display = 'block';
    }
}

function showStudents(teacherName) {
    document.getElementById('modal-teacher-name').innerText = teacherName;
    const list = document.getElementById('student-list');
    list.innerHTML = "";
    instructorStudents[teacherName].forEach(s => {
        let li = document.createElement('li');
        li.innerText = "• " + s;
        list.appendChild(li);
    });
    document.getElementById('student-modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('student-modal').classList.add('hidden'); }

function goBack() {
    location.reload(); // Simplest way to reset the view
}