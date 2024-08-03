function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid length.');
        return;
    }

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allCharacters = upper + lower + numbers + special;
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    
    document.getElementById('password').textContent = password;
}


