module.exports = function(sequelize, DataTypes) {
  

	var TeamA = sequelize.define('TeamA', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		players: {
			type: DataTypes.STRING(25),
			allowNull: true,
			field: 'Players'
		},
		year: {
			type: DataTypes.STRING(12),
			allowNull: true,
			field: 'Year'
		},
		season: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'Season'
		},
		team: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'Team'
		},
		gp: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'GP'
		},
		min: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Min'
		},
		ppg: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'PPG'
		},
		oreb: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Oreb'
		},
		dreb: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Dreb'
		},
		reb: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Reb'
		},
		ast: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Ast'
		},
		stl: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Stl'
		},
		blk: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'Blk'
		},
		to: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'TO'
		},
		pf: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'PF'
		},
		fgm: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FGM'
		},
		fga: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FGA'
		},
		fg: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FG%'
		},
		'3Ptm': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: '3PTM'
		},
		'3Pta': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: '3PTA'
		},
		'3Pt': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: '3PT%'
		},
		ftm: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FTM'
		},
		fta: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FTA'
		},
		ft: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'FT%'
		}
	}, {
		timestamps: false
});

// TeamA.associate = function(models) {

//     TeamA.belongsTo(models.players, {
// 		foreignKey: {
// 			allowNull: false
// 		}
// 	})
// }

return TeamA;
};