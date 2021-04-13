export default (database, DataTypes) => {
    const DegreeField = database.define(
      'degree_field',
      {
        degree_field_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        degree_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return DegreeField;
  };