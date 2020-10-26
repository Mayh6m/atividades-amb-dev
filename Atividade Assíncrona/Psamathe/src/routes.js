import express from 'express';
import {soma, sub, mult, div} from './utils/ironskin';
const route = express.Router();


route.post('/subtracao', (req, res) => {
    const { n1, n2 } = req.body;
    const result = sub(n1, n2);
    return res.json({ result })
});

route.post('/mult', (req, res) => {
    const { n1, n2 } = req.body;
    const result = mult(n1, n2);
    return res.json({ result })
});

route.post('/div', (req,res)=>{
    const{n1,n2} = req.body;
    const result = div(n1,n2);
    return res.json({result})

});

route.post('/soma', (req, res) => {
    const { n1, n2 } = req.body;
    const result = soma(n1, n2);
    return res.json({ result });
});

export default route;