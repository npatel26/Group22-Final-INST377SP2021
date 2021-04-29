import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Internships API!');
});

/// /////////////////////////////////
/// //// Company Endpoints - Done by Kyle Rosenstein ////////
/// /////////////////////////////////
router.get('/companies', async (req, res) => {
    try {
      const companies = await db.Companies.findAll();
      const reply = companies.length > 0 ? { data: companies } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Company ID
router.get('/companies/:company_id', async (req, res) => {
    try {
      const companies = await db.Companies.findAll({
        where: {
          company_id: req.params.company_id
        }
      });
  
      res.json(companies);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Company Name
router.get('/companies/:company_name', async (req, res) => {
    try {
      const companies = await db.Companies.findAll({
        where: {
          company_name: req.params.company_name
        }
      });
  
      res.json(companies);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
router.get('/companies/:company_city', async (req, res) => {
  try {
    const companies = await db.Companies.findAll({
      where: {
        company_city: req.params.company_city
      }
    });

    res.json(companies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/companies', async (req, res) => {
  const companies = await db.Companies.findAll();
  const currentId = (await companies.length) + 1;
  try {
    const newCompany = await db.Companies.create({
      company_id: currentId,
      company_name: req.body.company_name,
      company_city: req.body.company_city,
      company_state: req.body.company_state,
    });
    res.json(newCompany);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/companies/:company_id', async (req, res) => {
  try {
    await db.Companies.destroy({
      where: {
        company_id: req.params.company_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Possible add city and/or state

/// /////////////////////////////////
/// ////Industry Endpoints -- Done by Lindsey Castin////////
/// /////////////////////////////////
router.get('/industry', async (req, res) => {
    try {
      const industry = await db.Industry.findAll();
      const reply = industry.length > 0 ? { data: industry } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Industry ID
router.get('/companies/:industry_id', async (req, res) => {
    try {
      const industry = await db.Industry.findAll({
        where: {
          industry_id: req.params.industry_id
        }
      });
  
      res.json(industry);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Industry Type
router.get('/companies/:industry_type', async (req, res) => {
    try {
      const industry = await db.Industry.findAll({
        where: {
          industry_type: req.params.industry_type
        }
      });
  
      res.json(industry);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
router.post('/industry', async (req, res) => {
  const Industry = await db.Industry.findAll();
  const currentId = (await Industry.length) + 1;
  try {
    const newIndustry = await db.Industry.create({
      industry_id: currentId,
      industry_type: req.body.industry_type,
    });
    res.json(newIndustry);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/industry/:industry_id', async (req, res) => {
  try {
    await db.Industries.destroy({
      where: {
        industry_id: req.params.industry_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
/// ///////////////////////////////////////////
///Industry Endpoints--Done by Nikita Patel///
/// /////////////////////////////////////////
router.get('/degree_field', async (req, res) => {
  try {
    const degree_field = await db.DegreeField.findAll();
    const reply = degree_field.length > 0 ? { data: degree_field } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Degree Field ID 
router.get('/degree_field/:degree_field_id', async (req, res) => {
  try {
    const degree_field = await db.DegreeField.findAll({
      where: {
        degree_field_id: req.params.degree_field_id
      }
    });
    res.json(degree_field);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Degree Type
router.get('/degree_field/:degree_type', async (req, res) => {
  try {
    const degree_field = await db.DegreeField.findAll({
      where: {
        degree_type: req.params.degree_type
      }
    });
    res.json(degree_field);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.post('/degree_field', async (req, res) => {
const degree_field = await db.DegreeField.findAll();
const currentId = (await degree_field.length) + 1;
try {
  const newDegreeField = await db.DegreeField.create({
    degree_field_id: currentId,
    degree_type: req.body.degree_type,
  });
  res.json(newDegreeField);
} catch (err) {
  console.error(err);
  res.error('Server error');
}
});
router.delete('/degree_field/:degree_field_id', async (req, res) => {
try {
  await db.DegreeField.destroy({
    where: {
      degree_field_id: req.params.degree_field_id
    }
  });
  res.send('Successfully Deleted');
} catch (err) {
  console.error(err);
  res.error('Server error');
}
});
/// /////////////////////////////////
/// ////Degree Rank Endpoints Done by Maya Alli////////
/// /////////////////////////////////
router.get('/degree_rank', async (req, res) => {
  try {
    const degree_rank = await db.DegreeRank.findAll();
    const reply = degree_rank.length > 0 ? { data: degree_rank } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Degree Rank ID 
router.get('/degree_rank/:degree_rank_id', async (req, res) => {
  try {
    const degree_rank = await db.DegreeRank.findAll({
      where: {
        degree_rank_id: req.params.degree_rank_id
      }
    });
    res.json(degree_rank);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Degree Title
router.get('/degree_rank/:degree_title', async (req, res) => {
  try {
    const degree_rank = await db.DegreeRank.findAll({
      where: {
        degree_title: req.params.degree_title
      }
    });
    res.json(degree_rank);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.post('/degree_rank', async (req, res) => {
  const DegreeRank = await db.DegreeRank.findAll();
  const currentId = (await DegreeRank.length) + 1;
  try {
    const newRank = await db.DegreeRank.create({
      degree_rank_id: currentId,
      degree_title: req.body.degree_title,
    });
    res.json(newRank);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/degree_rank/:degree_rank_id', async (req, res) => {
  try {
    await db.DegreeRank.destroy({
      where: {
        degree_rank_id: req.params.degree_rank_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
  });

/// /////////////////////////////////
/// ////Position Title Endpoints - Vincent Tann////////
/// /////////////////////////////////
router.get('/jobs_and_internships', async (req, res) => {
    try {
      const jobs_and_internships = await db.JobsAndInternships.findAll();
      const reply = jobs_and_internships.length > 0 ? { data: jobs_and_internships } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Position Title
router.get('/jobs_and_internships/:position_title', async (req, res) => {
    try {
        const jobs_and_internships = await db.JobsAndInternships.findAll({
        where: {
          position_title: req.params.position_title
        }
      });
  
      res.json(jobs_and_internships);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});
// Job ID
router.get('/jobs_and_internships/:job_id', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        job_id: req.params.job_id
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Company ID
router.get('/jobs_and_internships/:company_id', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        company_id: req.params.company_id
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Job Degree Requirement ID
router.get('/jobs_and_internships/:degree_req_id', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        degree_req_id: req.params.degree_req_id
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Work Description
router.get('/jobs_and_internships/:work_desc', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        work_desc: req.params.work_desc
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Skills Description
router.get('/jobs_and_internships/:skills_desc', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        skills_desc: req.params.skills_desc
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Application Due Date
router.get('/jobs_and_internships/:application_due_date', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        application_due_date: req.params.application_due_date
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Job Link
router.get('/jobs_and_internships/:link', async (req, res) => {
  try {
      const jobs_and_internships = await db.JobsAndInternships.findAll({
      where: {
        link: req.params.link
      }
    });

    res.json(jobs_and_internships);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Job Post
router.post('/jobs_and_internships', async (req, res) => {
  const jobs_and_internships = await db.JobsAndInternships.findAll();
  const newId = (await jobs_and_internships.length) + 1;
  try {
    const newJob = await db.JobsAndInternships.create({
      job_id: newId,
      company_id: req.body.company_id,
      degree_field_id: req.body.degree_field_id,
      position_title: req.body.position_title,
      work_desc: req.body.work_desc,
      skills_desc: req.body.skills_desc,
      application_due_date: req.body.application_due_date,
      link: req.body.link,
    });
    res.json(newJob);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// Job Delete
router.delete('/jobs_and_internships/:job_id', async (req, res) => {
  try {
    await db.JobsAndInternships.destroy({
      where: {
        job_id: req.params.job_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Custom SQL Endpoint

router.get("/custom", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

export default router;