import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Internships API!');
});

/// /////////////////////////////////
/// ////Company Endpoints////////
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