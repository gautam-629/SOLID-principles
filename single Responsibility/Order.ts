export class Product {
    id: string;
    name: string
    price: number;
    constructor(id:string,name:string,price:number){
          this.id=id;
          this.name=name;
          this.price=price;
    }
}

export class Order {
    products: Product[] = [];

    addProduct(products: Product) {
        this.products.push(products)
    }
    getProducts() {
        return this.products;
    }
    removeProduct(productId: string) {
        return this.products.filter(product => product.id !== productId)
    }
   
}