let currentLogin = "";

const db = {
    "103874120102": { name: "Lloyd Pogi", pass: "123" }
};

function openLogin(type) {
    currentLogin = type.toLowerCase();
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('login-type-label').innerText = type;
}

function togglePass() {
    const p = document.getElementById('userPass');
    p.type = p.type === "password" ? "text" : "password";
}

function validateLogin() {
    const id = document.getElementById('userID').value;
    const pass = document.getElementById('userPass').value;

    if (db[id] && db[id].pass === pass) {
        document.getElementById('portal-home').style.display = 'none';
        document.getElementById('portal-content').classList.remove('hidden');
        
        // Show specific content based on login
        const section = currentLogin === 'student' ? 'tracker' : 'teachers';
        document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
        document.getElementById(section).style.display = 'block';
        
        if (currentLogin === 'student') {
            document.getElementById('gradeResult').innerHTML = `<p>Welcome back, ${db[id].name}!</p>`;
        }
    } else {
        alert("Invalid ID or Password");
    }
}

function goBack() {
    // Reset to initial menu
    document.getElementById('portal-content').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('portal-home').style.display = 'flex';
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('userID').value = "";
    document.getElementById('userPass').value = "";
}