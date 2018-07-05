
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheatsheets', (table) => {
    table.increments('id'),
    table.text('name')
    table.specificType('arrayfield','text[]')
    table.text('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cheatsheets')
};
