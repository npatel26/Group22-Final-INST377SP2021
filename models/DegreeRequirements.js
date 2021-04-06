export default (database, DataTypes) => {
    const DegreeRequirements = database.define(
      'degree_requirements',
      {
        degree_req_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        degree_rank_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        degree_field_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return DegreeRequirements;
  };

  // Idk what the keys and constraints do in the sql code