let Product = require('../models/Product');
let controler = {};

controler.findById = async (req, res, next)=>{
  res.json(await Product.findById(req.params.id))
};

controler.findAll = async (req, res, next)=> {
    res.json(await Product.find()
        .populate({
            path: 'producer',
            select: 'name -_id'
        })
        .populate({
            path: 'category',
            select: 'name -_id'
        })
    )
};
    // try {
    //     let query = req.query;
    //     let filter = {
    //         q: {
    //             name: query.name ? query.name : '',
    //             price: query.price
    //         },
    //         skip: query.skip ? query.skip : 0,
    //         limit: query.limit ? query.limit : '',
    // };
    //     console.log(filter);
    //
    //     let phones = await Phones.find({name: filter.q.name, price: filter.q.price})
    //         .skip(filter.skip)
    //         .limit(filter.limit)
    //
    //
    //
    //     res.json(phones);
    //
    // } catch (e) {
    //     console.log(e.message)
    // }
// };

    // try{
    //     let query = req.query;
    //
    //     let {name, price, skip, limit} = query;
    //
    //     if(name && price){
    //         res.json(await Product.find(query)
    //             .limit(limit)
    //             .skip(skip)
            // )
        // }
        // else if (price){
        //     res.json(await Product.find({price: price})
        //         .limit(limit)
        //         .skip(skip)
        //     )
        // }
        // else if(name){
        //     res.json(await Product.find({name: name})
        //         .limit(limit)
        //         .skip(skip)
        //     )
        // }
        // else {
        //     res.json(await Product.find({})
        //         .limit(limit)
        //         .skip(skip)
        //     );
        // }
    //
    // } catch (e) {
    //     console.log(e.message)
    // }
// };


controler.create = async (req, res, next)=>{
    try {
        res.json(await Product.create(req.body))
    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next)=>{
    res.json(await Product.findOneAndDelete(req.params.id))
};

module.exports = controler;
