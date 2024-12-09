document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form ke values lein
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const years = document.getElementById('years').value;
    const degree = document.getElementById('degree').value;
    const school = document.getElementById('school').value;
    const gradYear = document.getElementById('grad-year').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

    // Preview ko update karein
    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-email').innerText = `Email: ${email}`;
    document.getElementById('preview-phone').innerText = `Phone: ${phone}`;

    document.getElementById('preview-summary-text').innerText = summary;

    document.getElementById('preview-work').innerHTML = `
        <strong>Company:</strong> ${company} <br>
        <strong>Role:</strong> ${role} <br>
        <strong>Years of Experience:</strong> ${years}
    `;

    document.getElementById('preview-education').innerHTML = `
        <strong>Degree:</strong> ${degree} <br>
        <strong>School/University:</strong> ${school} <br>
        <strong>Graduation Year:</strong> ${gradYear}
    `;

    const skillsList = document.getElementById('preview-skills-list');
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    // Show the resume preview
    document.getElementById('resume-preview').classList.remove('hidden');
});
