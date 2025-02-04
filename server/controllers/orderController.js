const { ordersCollection, ObjectId } = require("../models/orderModel");

const placeOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const result = await ordersCollection.insertOne(orderData);
    res.status(201).send({ message: "Order placed successfully", result });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send({ error: "Failed to place order" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await ordersCollection.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Failed to fetch orders");
  }
};

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ordersCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).send({ error: "Failed to delete order" });
  }
};




module.exports = { placeOrder, getAllOrders, deleteOrder };
