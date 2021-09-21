const mongoose = require("mongoose");

const practiceSchema = new mongoose.Schema({
    id: String,
    practice: String
});

module.exports = mongoose.model("Practice", practiceSchema);