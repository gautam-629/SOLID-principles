// A class should have one reason to change

import { Invoice } from "./Invoice";
import { Product,Order } from "./Order";
import { PaymentProcessor } from "./PaymentProcessor";
import { PricingCalculator } from "./PricingCalculator";

const product=new Product('1','Laptop',500);
const product2= new Product('2',"Iphone",1000);

const order=new Order()
order.addProduct(product)
order.addProduct(product2)
const pricingCalculator= new PricingCalculator();
const total=pricingCalculator.calculatingPricing(order.getProducts());
const invoice= new Invoice();
invoice.generateInvoice(order.getProducts(),total)

const paymentProcessor=new PaymentProcessor()
paymentProcessor.processPayment(order)