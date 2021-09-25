const express = require("express");
const router = express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async(req, res) => {
        try {
            const addingMensRecord = new MensRanking(req.body);
            const insertmans = await addingMensRecord.save();
            res.status(201).send(insertmans);
        } catch (err) {
            res.status(400).send(err)
        }
    })
    //get all data
router.get("/mens", async(req, res) => {
    try {
        const getdata = await MensRanking.find({}).sort({ "ranking": 1 })
        res.send(getdata)
    } catch (err) {
        res.status(400).send(err)
    }
})

//get indivusule data
router.get("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getdata = await MensRanking.findById({ _id })
        res.send(getdata)
    } catch (err) {
        res.status(400).send(err)
    }
})

//update
router.patch("/mens/:id", async(req, res) => {
        try {
            const _id = req.params.id;
            const getdata = await MensRanking.findByIdAndUpdate(_id, req.body, {
                new: true
            })
            res.send(getdata)
        } catch (err) {
            res.status(500).send(err)
        }
    })
    //delete
router.delete("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id)
        const deldata = await MensRanking.findByIdAndDelete(_id)
        res.send(deldata)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;