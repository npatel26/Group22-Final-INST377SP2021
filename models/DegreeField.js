//Niki Patel
export default (database, DataTypes) => {
    const DegreeField = database.define(
      'degree_field',
      {
        degree_field_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        degree_type: { //  Finance, Accounting, Science, Law
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return DegreeField;
  };