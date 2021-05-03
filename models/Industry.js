// Done by Lindsey Castin
export default (database, DataTypes) => {
    const Industry = database.define(
      'industry',
      {
        industry_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        industry_type: { // Analytics, Business, Engineering
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Industry;
  };
