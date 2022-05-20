const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    application_type:
    {
        type: String,
        required: true
    },

    name:
    {
        type: String,
        required: true,
        trim: true
    },

    phone:
    {
        type: Number,
        required: true
    },

    email:
    {
        type: String,
        required: true,
        trim: true
    },

    address:
    {
        type: String,
        required: true,
        trim: true
    },
    pincode:
    {
        type: Number,
        required: true,
        trim: true
    },
    gst_no:
    {
        type: Number,
        trim: true
    },
    refferer_name:
    {
        type: String,
        trim: true
    },

    refferer_phone:
    {
        type: Number,
        trim: true
    },
    password:
    {
        type: String,
        required: true
    }
})

const dbConn = new mongoose.model("Login", menSchema);

module.exports = dbConn;