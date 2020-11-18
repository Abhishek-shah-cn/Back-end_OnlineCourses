const express = require("express");
const router = express.Router();
const Topic = require("../models/topics");

router.get("/", async (req, res) => {
  try {
    const topic = await Topic.find();
    res.json(topic);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    res.json(topic);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const topics = new Topic({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await topics.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const topics = await Topic.findById(req.params.id);
    topics.sub = req.body.sub;
    const a1 = await topics.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
