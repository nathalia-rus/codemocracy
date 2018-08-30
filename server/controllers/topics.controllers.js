const db = require('../db');
const Topic = require('../model/topics.models')

exports.getTopics = (req, res) => {
  Topic.find()
  .then( topics => {
  res.json(topics)
  })
}

exports.createTopic = (req, res) => {
  Topic.create({
    title: req.body.title
  })
    .then(topic => {
      res.json(topic)
    }).catch(() => {
      res.status(500)
    })
}

exports.deleteTopic = (req, res) => {
  Topic.findOneAndRemove({
    // put url delete index.js
    _id: req.params.id
  })
    .then((removedItem) => {
      if (removedItem) {
        res.sendStatus(200)
      }})
.catch ( () => {
  res.status(500)
})}


exports.VoteTopic = (req, res) => {
  const direction = req.params.direction; 
  const amount = direction === "up" ? 1 : -1;
  Topic.findoneandupdate(
  {
    _id: req.params.id
  },
  { $inc: {
    score: amount
    } 
  }, 
  {
    new: true 
  })
    .then(updatedItem => {
      res.json(updatedItem)
    })
}


