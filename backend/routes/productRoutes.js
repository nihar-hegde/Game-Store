import express from "express";

import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();
//@desc Fetch all products
//@route it is a GET request to api/product
//@access a public rote
//

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
//@desc Fetch single product
//@route it is a GET request to api/product/:id
//@access a public rote
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  })
);

export default router;
