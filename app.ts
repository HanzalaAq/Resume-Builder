const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

// Personal Info
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;

// Education
const displayEducation = document.getElementById('displayEducation') as HTMLElement;

// Work Experience
const displayWorkExperience = document.getElementById('displayWorkExperience') as HTMLElement;

// Skills
const displaySkills = document.getElementById('displaySkills') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(','); // Split skills into array

    // Display data on resume
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience;

    // Clear the skills list before populating it
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim(); // Remove any extra spaces
        displaySkills.appendChild(li);
    });

    // Show the resume container
    resumeContainer.style.display = 'block';
});
