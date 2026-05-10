let currentLogin = "";

// --- THE USER DATABASE ---
const userDatabase = {
    // Students
    "103874120102": { name: "Lloyd Pogi", pass: "student123", role: "student", math: "98", science: "97" },
    "103874120103": { name: "Maria Clara", pass: "pass456", role: "student", math: "85", science: "90" },
    
    // Instructors
    "teacher_reyes": { name: "Mrs. Reyes", pass: "reyes2026", role: "instructor" },
    "teacher_bautista": { name: "Mr. Bautista", pass: "math101", role: "instructor" }
};

// Data for the Faculty Pop-ups
const instructorStudents = {
    "Mrs. Reyes": ["Juan Dela Cruz", "Maria Clara", "Pedro Penduko"],
    "Mr. Bautista": ["Lloyd Pogi", "Angel Locsin", "Ricardo Dalisay"]
};

function openLogin(type) {
    currentLogin = type.toLowerCase();
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('login-type-label').innerText = type;
    document.getElementById('loginError').innerText = ""; // Clear errors
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

    // 1. Check if user exists and password matches
    if (user && user.pass === pass) {
        // 2. Check if they are logging into the correct role (e.g., student trying to login as student)
        if (user.role === currentLogin) {
            loginSuccess(user);
        } else {
            err.innerText = "Access Denied: Wrong portal for this ID.";
        }
    } else {
        err.innerText = "Invalid ID or Password!";
    }
}

function loginSuccess(user) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');

    if (user.role === 'student') {
        document.getElementById('tracker').style.display = 'block';
        document.getElementById('gradeResult').innerHTML = `
            <div class="card">
                <h4>Welcome, ${user.name}!</h4>
                <p><strong>Math:</strong> ${user.math}</p>
                <p><strong>Science:</strong> ${user.science}</p>
            </div>`;
    } else if (user.role === 'instructor') {
        document.getElementById('teachers').style.display = 'block';
    }
}

function goBack() {
    document.getElementById('portal-content').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('portal-home').style.display = 'flex';
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('userID').value = "";
    document.getElementById('userPass').value = "";
}

// Reuse your existing modal functions for the Instructor section
function showStudents(teacherName) {
    // ... (Keep your existing showStudents logic here)
}