'use strict';

const express = require('express');
const { FoodTable } = require('../models');

const router = express.Router();

router.get('/food', handleGet);
router.post('/food', handlePost);
router.put('/food/:id', handlePut);
router.delete('/food/:id', handleDelete);

async function handleGet(req, res) {
  let records = await FoodTable.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await FoodTable.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await FoodTable.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await FoodTable.delete(req.params.id);
  console.log('RESULTS FROM COLLECTION DELETE:', req.params.id, result);
  res.status(200).json({ result });
}

// // GET all food
// router.get('/food', async (req, res) => {
//   let records = await FoodTable.findAll();
//   res.status(200).send({ results: records });
// });

// // GET a food
// router.get('/food/:id', async (req, res) => {
//   let id = req.params.id;
//   let records = await FoodTable.findByPk(id);
//   res.status(200).send({ results: records });
// });

// // CREATE a food
// router.post('/food', async (req, res) => {
//   let record = await FoodTable.create(req.body);
//   res.status(200).json(record);
// });

// // UPDATE a food
// router.patch('/food/:id', async (req, res) => {
//   let id = req.params.id;
//   let recordToUpdate = await FoodTable.findByPk(id);
//   recordToUpdate.update(req.body);
//   await recordToUpdate.save();
//   res.status(200).json(recordToUpdate);
// });

// // DELETE a food
// router.delete('/food/:id', async (req, res) => {
//   let id = req.params.id;
//   await FoodTable.destroy({ where: { id } });
//   res.status(204).send('deleted');
// });

module.exports = router;
