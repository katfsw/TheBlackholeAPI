const router = require('express').Router();
const Submissions = require('./entry-model.js');

router.get('/', (req, res) => {
    Submissions
        .find()
        .then(status => {
             res.json(status);
         })
         .catch(err => res.send(err));
});

//GET a specific HttpCats ID
router.get('/:id', (req, res) => {
    Submissions
        .findById(req.params.id)
        .then(status => res.status(200).json(status))
        .catch(err => {
            res.status(500).json({ message: 'Failed to get submission ;(', err });
        });
})

//POST a HttpCats
router.post('/', (req, res) => {
    const data = req.body;
    Submissions
    .add(data)
    .then(status => {
      res.status(201).json(status);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new submission ;(' });
    });
  });

module.exports = router;