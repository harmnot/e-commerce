import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "Person" },
  items: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
