const mongoose = require('mongoose');

const mobileOrderSchema = new mongoose.Schema({
  orderId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  items: [{
    menuItem: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true }
    },
    quantity: { type: Number, required: true },
    selectedAddOns: [{
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }]
  }],
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending'
  },
  orderDate: { 
    type: Date, 
    default: Date.now 
  },
  deliveryMethod: { 
    type: String, 
    enum: ['Pickup', 'Delivery'],
    required: true 
  },
  deliveryAddress: String,
  paymentMethod: { 
    type: String, 
    required: true 
  },
  notes: String,
  invoiceNumber: String,
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MobileOrder', mobileOrderSchema); 