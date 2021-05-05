async function searchInternships() {
  const search = document.querySelector('#job');
  const targetList = document.querySelector('#jobsTable');
  
  const request = await fetch('api/jobs_and_internships');
  const result = await request.json();
  const finalArr = await result.data;
  console.log(finalArr);
  search.addEventListener('input', (event) => {
    event.preventDefault();
    console.log('input detected', search.value);
    const display = finalArr.filter((record) => record.position_title === search.value);
    console.log(display);
    display.forEach((row) => {
        const appendObj = document.createElement('tr');
        appendObj.innerHTML = '<td>' + row.position_title + '</td> <td>' + row.work_desc + '</td> <td>' + row.skills_desc + '</td> <td>' + row.link + '</td>';
        targetList.append(appendObj); 
    });
    
    console.log('input', event.target.value);
});
}

async function windowActions() {
  await searchInternships();
}
  
window.onload = windowActions();