import express from 'express'
import Form from '../models/formModel.js';

const router = express.Router();


router.get('/', async (req, res) => {
    let customerDetails = await Form.find({});
    res.json(customerDetails)
});


router.get('/:id', async (req, res) => {
    let customer = await Form.findById(req.params.id);
    if(customer){
        res.json(product);
    }else{
        res.status(404).json({message: "Customer not found"});
    }
})

export default router;