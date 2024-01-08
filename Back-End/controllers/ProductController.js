import db from '../models/index.js';

const {ProductModel,ClientModel} = db;

export const AddProduct = async (req,res) => {
    const {title,category,description,price,supplier,  clientId} = req.body;
    try {
        const newProduct = await ProductModel.create({
            title,
            category,
            description,
            price,
            supplier,
            clientId
        });
        res.status(200).json({"message" :"product added " ,"data":newProduct});
    }catch (error) {
        res.status(400).json({error :error.message});
    }
}


export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {

        const product= await ProductModel.findByPk(id,{include: [ClientModel]});


if(product){
        res.status(200).json({ "data":product });}
        else{
            res.status(404).json({ "message":"product not found" });   
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAllProduct = async (req, res) => {

    try {

        const Memes = await ProductModel.findAll({include: [ClientModel]});



        res.status(200).json({ "data":products });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.body.id;
  
    if (id) {
      try {
        const target = await ProductModel.findByPk(id);
  
        if (target) {
          await target.destroy();
          res.json({ message: "Deleted successfully" });
        } else {
          res.json({ message: `No element with the id ${id}` });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error deleting Product with id ${id}` });
      }
    } else {
      res.status(400).json({ message: "Provide an id" });
    }
  };


  export const updateProduct = async (req, res) => {
    const id = req.body.id;
  
    if (id) {
      try {
        const target = await ProductModel.findByPk(id);
  
        if (target) {
          const {title = target.title,category=target.category,description=target.description,price = target.price,supplier=target.supplier} = req.body;
          await target.update({
            title:title,
            category: category,
            description:description,
            price:price,
            supplier:supplier
          });
  
          res.json({ data: target });
        } else {
          res.json({ message: `No element with the id ${id}` });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error updating product with id ${id}` });
      }
    } else {
      res.status(400).json({ message: "Id is not provided" });
    }
  };
  