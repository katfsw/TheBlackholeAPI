const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('submissions')
}

function findBy(filter) {
    return db('submissions').where(filter);
}

async function add(character) {
    const [id] = await db('submissions').insert(character);

    return findById(id);
}

function findById(id) {
    return db('submissions')
    .where({ id })
    .first();
}

function remove(id) {
    return db('submissions')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
    return db('submissions')
      .where({ id })
      .update(changes);
};