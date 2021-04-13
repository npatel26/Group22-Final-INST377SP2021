// Done by Kyle Rosenstein
export default (database, DataTypes) => {
    const Companies = database.define(
      'companies',
      {
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        company_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        company_city: {
          type: DataTypes.STRING,
          allowNull: false
        },
        company_state: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Companies;
  };
  