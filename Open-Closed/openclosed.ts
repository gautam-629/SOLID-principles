//Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {

    processor: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor
    }

    processPayment(amount: number) {
        this.processor.processPayment(amount)
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`)
    }
}

let creditCardProcessor = new CreditCardProcessor();
let processor = new PaymentProcessor(creditCardProcessor);
processor.processPayment(100)

