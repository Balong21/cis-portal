let currentLoginType = "";

const userDatabase = {
    "103874120102": { name: "Lloyd Pogi", pass: "student123", role: "student", math: 98, science: 97 },
    "103874120103": { name: "Maria Clara", pass: "pass456", role: "student", math: 88, science: 92 },
    "teacher_reyes": { name: "Mrs. Reyes", pass: "reyes2026", role: "instructor" },
    "teacher_bautista": { name: "Mr. Bautista", pass: "math101", role: "instructor" },
    "admin_cis": { name: "System Admin", pass: "admin789", role: "administrator" }
};

const instructorStudents = {
    "Mrs. Reyes": ["Juan Dela Cruz", "Maria Clara", "Pedro Penduko"],
    "Mr. Bautista": ["Lloyd Pogi", "Angel Locsin", "Ricardo Dalisay"]
};

function openLogin(type) {
    currentLoginType = type.toLowerCase();
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('login-type-label').innerText = "Logging in as: " + type;
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
        // Validation: Admins can bypass portal type, others must match their role
        if (user.role === currentLoginType || user.role === 'administrator') {
            showPortalContent(user);
        } else {
            err.innerText = `Access Denied: Use the ${user.role.toUpperCase()} portal.`;
        }
    } else {
        err.innerText = "Invalid ID or Password!";
    }
}

function showPortalContent(user) {
    document.getElementById('portal-home').style.display = 'none';
    document.getElementById('portal-content').classList.remove('hidden');
    document.getElementById('user-display-name').innerText = `User: ${user.name}`;

    // Reset visibility
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');

    if (user.role === 'student') {
        const tracker = document.getElementById('tracker');
        tracker.style.display = 'block';
        
        // Calculate Grades
        const avg = ((user.math + user.science) / 2).toFixed(1);
        const statusClass = avg >= 75 ? "pass" : "fail";
        const statusText = avg >= 75 ? "PASSED / PROMOTED" : "NEEDS IMPROVEMENT";

        document.getElementById('gradeResult').innerHTML = `
            <div class="card fade-in">
                <h4>Welcome back, ${user.name}!</h4>
                <p>Academic Standing for School Year 2026-2027</p>
                <hr style="opacity:0.2; margin: 15px 0;">
                <p><strong>Mathematics:</strong> ${user.math}%</p>
                <p><strong>Science:</strong> ${user.science}%</p>
                <p style="font-size: 1.2rem; margin-top: 10px;"><strong>Final Average:</strong> ${avg}%</p>
                <div class="status-badge ${statusClass}">${statusText}</div>
            </div>`;
    } else {
        // Instructor and Admin View
        document.getElementById('teachers').style.display = 'block';
        const title = document.getElementById('view-title');
        title.innerText = user.role === 'administrator' ? "Admin: Faculty Management" : "Instructor: Student Directories";
    }
}

function showStudents(teacherName) {
    document.getElementById('modal-teacher-name').innerText = "Students of " + teacherName;
    const list = document.getElementById('student-list');
    list.innerHTML = "";
    
    instructorStudents[teacherName].forEach(s => {
        let li = document.createElement('li');
        li.style.borderBottom = "1px solid #eee";
        li.style.padding = "5px 0";
        li.innerHTML = "<strong>•</strong> " + s;
        list.appendChild(li);
    });
    document.getElementById('student-modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('student-modal').classList.add('hidden'); }

function goBack() {
    // Clear display and reset to login view
    location.reload();
}