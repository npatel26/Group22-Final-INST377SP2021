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
// Companny ID
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
/// ////Industry Endpoints////////
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

/// /////////////////////////////////
/// ////Position Title Endpoints////////
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