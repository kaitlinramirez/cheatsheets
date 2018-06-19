
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cheatsheets').del()
    .then(function () {
      // Inserts seed entries
      return knex('cheatsheets').insert([
        {id: 1, name: 'Knex', snippet: 'npm install.....', description: 'steps to install Knex'},
        {id: 2, name: 'Heroku', snippet: 'heroku create', description: 'deploying to heroku'}
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('cheatsheets_id_seq', (SELECT MAX(id) FROM cheatsheets))")
    })
};
