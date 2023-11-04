"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate(models) {}
	}
	Post.init(
		{
			img: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			text: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: "Post",
		},
	);
	return Post;
};
