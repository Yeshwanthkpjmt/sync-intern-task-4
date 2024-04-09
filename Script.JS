function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;
    const interests = document.getElementById('interests').value;

    if (fullName && dob && phone && email && subject && address && education && workExperience && skills) {
        // Simulated form submission (replace with actual logic)
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        document.getElementById('applicationForm').reset(); // Clear form fields
    } else {
        alert("Please fill out all required fields.");
    }
}
