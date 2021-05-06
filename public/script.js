// This is connected to the About/General Info page to display the companies, industries, and degrees

// Pulls company data from server and displays on front end
async function getCompanyData() {
  //console.log('window loaded');
  //const endpoint = '/api/companies';
  //const request = await fetch(endpoint);
  //const companies = await request.json();
  //console.log(companies);
  const endpoint = await fetch('/api/companies');
  const result = await endpoint.json();
    
  const finalArr = await result.data;
  const target = document.querySelector('#companyTable');
  console.log(finalArr);
  finalArr.forEach((index) => {
    const name = index.company_name;
    const city = index.company_city;
    const state = index.company_state;

    const appendObj = document.createElement('tr');
    appendObj.innerHTML = '<td>' + name + '</td> <td>' + city + '</td> <td>' + state + '</td>';
    target.append(appendObj);
  });
}

// Pulls industry data from server and displays on front end
async function getIndustryData() {
  //console.log('window loaded');
  //const endpoint = '/api/industry';
  //const request = await fetch(endpoint);
  //const industries = await request.json();
  //console.log(industries);
  const endpoint = await fetch('/api/industry');
  const result = await endpoint.json();
    
  const finalArr = await result.data;
  const target = document.querySelector('#industryTable');
  console.log(finalArr);
  finalArr.forEach((index) => {
    const type = index.industry_type;

    const appendObj = document.createElement('tr');
    appendObj.innerHTML = '<td>' + type + '</td>';
    target.append(appendObj);
  });
}

// Pulls degree data from server and displays on front end
async function getDegreeData() {
  //console.log('window loaded');
  //const endpoint = '/api/degree_field';
  //const request = await fetch(endpoint);
  //const degrees = await request.json();
  //console.log(degrees);
  const endpoint = await fetch('/api/degree_field');
  const result = await endpoint.json();
    
  const finalArr = await result.data;
  const target = document.querySelector('#degreeTable');
  console.log(finalArr);
  finalArr.forEach((index) => {
    const type = index.degree_type;

    const appendObj = document.createElement('tr');
    appendObj.innerHTML = '<td>' + type + '</td>';
    target.append(appendObj);
  });
}

async function windowActions() {
  await getIndustryData();
  await getDegreeData();
  await getCompanyData();
}

window.onload = windowActions();




