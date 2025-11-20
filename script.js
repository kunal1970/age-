function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "⚠ Please select your Date of Birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "❌ Future dates are not allowed.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        🎉 <b>Your Age</b><br><br>
        <span>${years}</span> Years <br>
        <span>${months}</span> Months <br>
        <span>${days}</span> Days
    `;
}
