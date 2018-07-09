const express = require('express');
const router = express.Router();
const queries = require('../queries/sheets');

router.get("/", (request, response, next) => {
    queries.list()
    .then(cheatsheets => {
        response.json({cheatsheets});
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(cheatsheets => {
        cheatsheets
            ? response.json({cheatsheets})
            : response.status(404).json({message: 'Not found'})
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(cheatsheets => {
        response.status(201).json({cheatsheets});
    })
    .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true});
    })
    .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
    .then(cheatsheets => {
        response.json({cheatsheets});
    })
    .catch(next);
});

module.exports = router;
