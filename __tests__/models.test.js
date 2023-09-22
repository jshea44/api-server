'use strict';

const { sequelize, ClothesTable, FoodTable } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the Model Associations', () => {
  let clothes;
  let food;

  test('Should be able to create a Clothes and a Food', async () => {
    clothes = await ClothesTable.create({
      name: 'Shirt',
      type: 'long sleeve',
    });
    food = await FoodTable.create({
      name: 'Kale',
      type: 'vegetable',
      clothesId: clothes.id,
    });

    expect(clothes.name).toEqual('Shirt');
    expect(food.name).toEqual('Kale');
    expect(food.clothesId).toEqual(clothes.id);
  });

  test('Should be able to fetch a clothes and include all food', async () => {
    clothes = await ClothesTable.read(clothes.id, { include: FoodTable.model });

    console.log(clothes.Food);
    expect(clothes.name).toEqual('Shirt');
    expect(clothes.Food).toBeTruthy();
    expect(clothes.Food[0].name).toEqual('Kale');
  });
});
