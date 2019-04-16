import { Person, Product } from "../model";

class ProductService {
  static async addProduct(req, res, next) {
    try {
      const addProduct = await Product.create({
        productName: req.body.productName,
        stock: req.body.stock,
        category: req.body.category
      });
      res.status(201).json(addProduct);
    } catch (e) {
      next(e);
    }
  }

  static async listproducts(req, res, next) {
    try {
      const list = await Product.find({});
      res.status(200).json(list);
    } catch (e) {
      next(e);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const tryingDelete = await Product.findByIdAndDelete(req.params.id);
      res.status(201).json(tryingDelete);
    } catch (e) {
      next(e);
    }
  }

  static async updated(req, res, next) {
    try {
      const editable = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { runValidators: true }
      );
      res.status(200).json(editable);
    } catch (e) {
      next(e);
    }
  }
}

export default ProductService;
