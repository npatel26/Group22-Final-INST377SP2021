export default (database, DataTypes) => {
    const JobsAndInternships = database.define(
      'jobs_and_internships',
      {
        job_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        degree_req_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        position_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        work_desc: {
          type: DataTypes.STRING,
        },
        skills_desc: {
          type: DataTypes.STRING,
        },
        application_due_date: {
          type: DataTypes.DATE,
        },
        link: {
          type: DataTypes.STRING,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return JobsAndInternships;
  };

  // More keys amd constraints in SQL