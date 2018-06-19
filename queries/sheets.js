const database = require("../database-connection");

module.exports = {
    list(){
        return database('cheatsheets');
    },
    read(id){
        return database('cheatsheets').where('id', id).first();
    },
    create(cheatsheets){
        return database('cheatsheets').insert(cheatsheets).returning('*').then(record => record[0])
    },
    update(id, cheatsheets){
        return database('cheatsheets').update(cheatsheets).where('id', id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('cheatsheets').where('id', id).del()
    }
};
