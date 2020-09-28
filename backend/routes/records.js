const router = require('express').Router();
let Record = require('../models/record.model');

router.route('/').get((req,res)=>{
    Record.find()                              //would return list of all users from DB
    .then(records => res.json(records))          //would return the response in json form
    .catch(err => res.status(400).json('Error: '+err))
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const Class = req.body.Class;
    const enrollment_no = req.body.enrollment_no;
    const address = req.body.address;
    const date = Date.parse(req.body.date);
    const newRecord = new Record({
        username,
        Class,
        enrollment_no,
        address,
        date
    });

    newRecord.save()       //new user saved to DB
    .then( () => res.json('Record Added!'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Record.findById(req.params.id)   //getting the id from slash(/)id
    .then(record => res.json(record))
    .catch(err => res.status(400).json('Error: '+err))
});

router.route('/:id').delete((req,res)=>{
    Record.findByIdAndDelete(req.params.id)
    .then(() => res.json('Record Deleted.'))
    .catch(err => res.status(400).json('Error: '+err))
});

router.route('/update/:id').post((req,res)=>{
    Record.findById(req.params.id)
    .then(record => {
        record.username = req.body.username;
        record.Class = req.body.Class;
        record.enrollment_no = req.body.enrollment_no;
        record.address = req.body.address;
        record.date = Date(req.body.date);

        record.save()
        .then(() => res.json('Record Updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;