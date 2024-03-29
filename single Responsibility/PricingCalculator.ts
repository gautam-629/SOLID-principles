import { Product } from "./Order";

export class PricingCalculator{
    calculatingPricing(products:Product[]) {
        return products.reduce((pre, current) => pre + current.price, 0)
    }
}