export default (database, DataTypes) => {
    const InternshipIndustries = database.define(
      'internship_industries',
      {
        job_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        industry_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return InternshipIndustries;
  };

  // Keys and Constraints on SQL