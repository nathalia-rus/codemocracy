
const router = require('express').Router();
const express = require('express');
const TopicsController = require('./controllers/topics.controllers.js')



router 
  .get('/topics', TopicsController.getTopics)
  .post('/topics', TopicsController.createTopic)
  .delete('/topics/:id', TopicsController.deleteTopic)
router.get('/*', () => {
  this.status = 404;
});

module.exports = router;