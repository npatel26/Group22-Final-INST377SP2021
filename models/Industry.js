export default (database, DataTypes) => {
    const Industry = database.define(
      'industry',
      {
        industry_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        industry_type: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Industry;
  };
