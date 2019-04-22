import { Person, Product, Cart, DummyMoney, Checkout } from "../model/index.js";
import { verifyJwt } from "../helper/jwt.js";

class GoCheckout {
  static async create(req, res, next) {
    try {
      const checkout = await Checkout.create({
        user: req.user._id,
        total: req.body.total
      });
      const updateAgain = await Checkout.findOneAndUpdate(
        {
          _id: checkout._id
        },
        { $push: { order: { $each: req.body.orders } } }
      );
      console.log(updateAgain, "updated");
      res.status(200).json(updateAgain);
    } catch (e) {
      next(e);
    }
  }

  static async update(req, res, next) {
    try {
      const okupdate = await Checkout.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.status(200).json(okupdate);
    } catch (e) {
      next(e);
    }
  }

  static async find(req, res, next) {
    console.log(req.params.status);
    let check;
    if (req.params.status == "true") {
      check = true;
    } else {
      check = false;
    }
    console.log(check, "ini check");
    try {
      const getOne = await Checkout.find({
        paid: check
      });
      res.status(200).json(getOne);
    } catch (e) {
      console.log(e, "ini error");
      next(e);
    }
  }

  static async findforUser(req, res, next) {
    let check;
    if (req.params.status == "true") {
      check = true;
    } else {
      check = false;
    }
    try {
      const token = req.header("token");
      const user = verifyJwt(token);
      console.log(user, "ini decoded");
      const getOne = await Checkout.find({
        user: user._id,
        paid: check
      });
      if (!getOne.length) {
        res.status(204).json({ error: "nothing" });
      } else {
        res.status(200).json(getOne);
      }
    } catch (e) {
      console.log(e, "ini error");
      next(e);
    }
  }

  static async getAll(req, res, next) {
    try {
      const getAll = await Checkout.find({ user: req.user._id })
        .populate("user")
        .populate({
          path: "order",
          populate: { path: "item" }
        })
        .sort({ created_at: -1 });
      res.status(200).json(getAll);
    } catch (e) {
      next(e);
    }
  }
}

export default GoCheckout;
