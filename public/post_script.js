async function recordSubmission() {
    const form = document.querySelector('#recordSubmit');
    const comp = document.querySelector('#company');
    const degree = document.querySelector('#degree');
    const title = document.querySelector('#job');
    const desc = document.querySelector('#desc');
    const skills = document.querySelector('#skills');
    const dueDate = document.querySelector('#date');
    const link = document.querySelector('#link');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const post = await fetch('/api/jobs_and_internships', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_id: comp.value,
                degree_req_id: degree.value,
                position_title: title.value,
                work_desc: desc.value,
                skills_desc: skills.value,
                application_due_date: dueDate.value,
                link: link.value
            })
        });
        const notif = document.querySelector('#confirmation');
        notif.innerHTML = 'Your job posting has been added';
    });
}

async function windowActions() {
    const button = document.querySelector('#button');
    button.addEventListener('click', (event) => { recordSubmission() });
    await recordSubmission();
}
    
window.onload = windowActions();