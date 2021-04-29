async function getCompanyData() {
  const endpoint = await fetch('/api/companies');
  const result = await endpoint.json();
    
  const finalArr = await result.data;
  const target = document.querySelector('#companyTable');
  console.log(result);
  finalArr.forEach((index) => {
    const id = index.company_id;
    const name = index.company_name;
    const city = index.company_city;
    const state = index.company_state;

    const appendObj = document.createElement('tr');
    appendObj.innerHtml = '<td>${id}</td> <td>${name}</td> <td>${city}</td> <td>${state}</td>';
    target.append(appendObj);
  });
}

async function windowActions() {
  getCompanyData();
}

window.onload = windowActions();