
const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedJobs` array in Profile.js
const jobSchema = new Schema({
    applyURI: {
        type: String
    },

    department: {
        type: String,

    },

    position: {
        type: String

    }
});

const Job = model('Job', jobSchema);

module.exports = Job;