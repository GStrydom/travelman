const mongoose = require('mongoose')

const travelItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    date: Date,
    startPlace: String,
    endPlace: String,
    timeTravelled: String,
    distanceTravelled: String
})

module.exports = mongoose.model('TravelItem', travelItemSchema)