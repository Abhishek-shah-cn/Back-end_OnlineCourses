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
    topic_id: req.body.topic_id,
    topic_title: req.body.topic_title,
    topic_description: req.body.topic_description,
    like:req.body.like,
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
    topics.like = req.body.like;
    const a1 = await topics.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
