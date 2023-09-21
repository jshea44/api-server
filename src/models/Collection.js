'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, options = {}) {
    try {
      if (!id) {
        return this.model.findAll({}, options);
      } else {
        return this.model.findByPk(id, options);
      }
    } catch (err) {
      console.log('Can not read ' + this.model);
      console.error(err);
    }
  }

  async create(values) {
    try {
      return this.model.create(values);
    } catch (err) {
      console.log('Can not create ' + this.model);
      console.error(err);
    }
  }

  async update(id, values) {
    try {
      let record = await this.model.findOne({ where: { id } });
      await record.update(values);
      return record;
    } catch (err) {
      console.log('Can not update ' + this.model);
      console.error(err);
    }
  }

  async delete(id) {
    try {
      let results = await this.model.destroy({ where: { id } });
      return 'deleted';
    } catch (err) {
      console.log('Can not delete ' + this.model);
      console.error(err);
    }
  }
}

module.exports = Collection;
