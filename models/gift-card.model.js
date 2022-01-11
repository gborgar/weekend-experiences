const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const giftSchema = new Schema({
	code: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	email: {
		type: String,
		required: [true, "email is required"],
		match: [EMAIL_PATTERN, "email is not valid"],
		trim: true,
		lowercase: true,
		unique: true,
	},
	balance: {
		type: Number,
		enum: [25, 50, 100, 150, 200, 250],
		require: [true, "Must select the price"]
	}
}, {timestamps:true})