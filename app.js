var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
// Personal Info
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
// Education
var displayEducation = document.getElementById('displayEducation');
// Work Experience
var displayWorkExperience = document.getElementById('displayWorkExperience');
// Skills
var displaySkills = document.getElementById('displaySkills');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(','); // Split skills into array
    // Display data on resume
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience;
    // Clear the skills list before populating it
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim(); // Remove any extra spaces
        displaySkills.appendChild(li);
    });
    // Show the resume container
    resumeContainer.style.display = 'block';
});
