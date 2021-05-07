# This is your readme DELETE THIS WHEN DONE
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown DELETE THIS WHEN DONE
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

# Terps4Work

## Description

As recruiting for an internship/full time employment becomes continuously arduous in this virtual environment, our group set out to create a platform that contains various internship and full-time employment opportunities across 7 industries. By having a centralized platform that is accessible for University of Maryland students, our group hopes to help our peers gain internship and full-time employment. 


## Links

[Terps4Work Website](https://stark-dusk-71862.herokuapp.com/)

[Developer Manual](https://github.com/npatel26/Group22-Final-INST377SP2021/blob/main/README.md#developer-manual)

## Target Browsers

- Desktop
- MacBook
- Surface Book
---

# Developer Manual

## How to Install

1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. Type `npm install` into the terminal window and run.
4. After installation, the application should be ready to use.

## How to Run the Application

1. Open repository in VSCode terminal or Terminal application.
2. Run `npm start`. No errors should occur.
3. The application should now be accessible by going to `http://localhost:3000/` on a web browser.

## How to Run Tests
There are currently no prewritten tests for the application, however you can use Cypress to run your own written tests.

1. Open 2 terminals (Note: Make sure you are working in the main project directory).
2. On one terminal, run `npm start`.
3. On the other terminal, run `npm test`.

## Server Application API

NOT COMPLETE

`api` - API route for all data

| API Methods   | Description          |
| ------------- | -------------------- |
| GET           |  Retrieves resources |
| POST          |  Creates resources   |
| DELETE        |  Deletes resources   |


| Endpoints            | Description |
| -------------------- | ----------- |
| companies            | Company information that includes company ID, company name, and city of company. |
| industry             | Industry information that includes industry ID and industy type. |
| degree_field         | Degree field information that includes degree field ID and degree type (Ex. Science, Accounting, Law, etc.). |
| degree_rank          | Degree rank information that includes degree rank ID and degree title (Ex. Pursuing Bachelor's, Bachelor's degree, etc.). |
| jobs_and_internships | Job position information that includes job ID, company ID, degree requirement ID, work description, skills description, application due date, and link. |


## Known Bugs and Further Development

Known Bugs:
- NOT COMPLETE

Further Development:
- Add more pages that would further personalize the user's job search.
- Add more options for searching by job titles and positions.
- Add more job listings from original database sources.
