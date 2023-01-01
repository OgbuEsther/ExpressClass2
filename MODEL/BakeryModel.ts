import mongoose from "mongoose";

interface bakery {
  name: string;
  address: string;
  contact: number;
  snacks: {};
  deliveryTruck: boolean;
  uniqueCode: string;
}

interface iBakery extends bakery, mongoose.Document {}

const bakerySchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: Number,
  snacks: Object,
  deliveryTruck: Boolean,
  uniqueCode: String,
});

const bakeryModel = mongoose.model<iBakery>("MyBakeryApi", bakerySchema);

export default bakeryModel;
