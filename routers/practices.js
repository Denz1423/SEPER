const mongoose = require("mongoose");
const Practice = require("../models/practices");

module.exports = {
    getAll: (req, res) => {
        Practice.find((err, results) => {
            if(err){
                return res.status(404).json(err);
            } else if (!results){
                return res.status(404).json();
            }

            if(results.length === 0){
                return res.status(404).json('No practices');
            } else {
                res.send(results);
            }
        });
    }
}