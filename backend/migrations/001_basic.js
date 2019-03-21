exports.up = knex =>
  knex.raw(`
    (sql code goes here)
  `);

exports.down = (knex, Promise) => Promise.resolve();
