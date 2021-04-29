async function getCompanyData() {
    const endpoint = '/api/companies/';
    const request = await fetch(endpoint);
    const result = await request.json();

    const companies = [];
    companies.push(result.data);
    
    const finalArr = companies[0];
    const target = document.querySelector('#companyTable');

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