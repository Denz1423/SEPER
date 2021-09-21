const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    //
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    authors: String,
    source: String,
    pubyear: Number,
    doi: String,
    claim: String,
    EvidenceLevel: String,
    sepractice: String
});

module.exports = mongoose.model("Article", articleSchema);