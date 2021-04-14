//Maya Alli 
export default (database, DataTypes) => {
    const DegreeRank = database.define(
      'degree_rank',
      {
        degree_rank_id: {
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
    return DegreeRank;
  };