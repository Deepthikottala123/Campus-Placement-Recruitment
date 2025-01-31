
function validateLogin() {
    const studentName = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    
    if (!studentName || !studentId || !email) {
        errorMessage.textContent = 'Please fill all the fields correctly.';
        return;
    }

    
    if (!email.endsWith('@rguktsklm.ac.in')) {
        errorMessage.textContent = 'Please enter a valid RGUKT SKLM email address.';
        return;
    }


    sessionStorage.setItem('loggedInStudentName', studentName);
    sessionStorage.setItem('loggedInStudentId', studentId);
    sessionStorage.setItem('loggedInEmail', email);

    
    window.location.href = 'upload.html'; 
}
