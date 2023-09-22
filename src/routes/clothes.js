'use strict';

const express = require('express');
const { ClothesTable } = require('../models');
const router = express.Router();

router.get('/clothes', handleGet);
router.post('/clothes', handlePost);
router.put('/clothes/:id', handlePut);
router.delete('/clothes/:id', handleDelete);

async function handleGet(req, res) {
  let records = await ClothesTable.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await ClothesTable.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await ClothesTable.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await ClothesTable.delete(req.params.id);
  console.log('RESULTS FROM COLLECTION DELETE:', req.params.id, result);
  res.status(200).json({ result });
}

module.exports = router;

// // GET all clothes
// router.get('/clothes', async (req, res) => {
//   let records = await ClothesModel.findAll();
//   res.status(200).send({ results: records });
// });

// // GET a clothes
// router.get('/clothes/:id', async (req, res) => {
//   let id = req.params.id;
//   let records = await ClothesModel.findByPk(id);
//   res.status(200).send({ results: records });
// });

// // CREATE a clothes
// router.post('/clothes', async (req, res) => {
//   let record = await ClothesModel.create(req.body);
//   res.status(200).json(record);
// });

// // UPDATE a clothes
// router.patch('/clothes/:id', async (req, res) => {
//   let id = req.params.id;
//   let recordToUpdate = await ClothesModel.findByPk(id);
//   recordToUpdate.update(req.body);
//   await recordToUpdate.save();
//   res.status(200).json(recordToUpdate);
// });

// // DELETE a clothes
// router.delete('/clothes/:id', async (req, res) => {
//   let id = req.params.id;
//   await ClothesModel.destroy({ where: { id } });
//   res.status(204).send('delted');
// });
