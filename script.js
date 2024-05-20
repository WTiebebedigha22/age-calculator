function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    
    const diff = now - dob;
    const ageDate = new Date(diff);
    
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = Math.abs(ageDate.getUTCMonth() - 12);
    
    document.getElementById('result').innerText = `You are ${years} years , ${months} months old.`;
}