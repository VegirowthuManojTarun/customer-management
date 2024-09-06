// backend/routes/customerRoutes.js
const express = require("express");
const router = express.Router();
const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  allCustomers,
  getAddresses,
  addAddress,
  updateAddress,
  removeAddress,
} = require("../models/customerModel");

// Get all customers with pagination
router.get("/", getCustomers);

// Get a specific customer by ID
router.get("/:id", getCustomerById);

// Create a new customer
router.post("/", createCustomer);

// Update an existing customer
router.put("/:id", updateCustomer);

// Delete a customer by ID
router.delete("/:id", deleteCustomer);

// Search customers
router.get("/find/search", allCustomers);

//get addresses
router.get("/:id/addresses", getAddresses);

// Add a new address
router.post("/:id/addresses", addAddress);

// Update an address
router.put("/addresses/:id", updateAddress);

// Remove an address
router.delete("/addresses/:id", removeAddress);

module.exports = router;
