//  It suggests that high-level modules should not depend on low-level modules but should depend on abstractions.
// Abstraction
interface Notification {
    sendNotification(): void;
}

// Concrete implementations
class EmailNotification implements Notification {
    sendNotification(): void {
        console.log("Sending email notification...");
        // Logic to send email
    }
}

class SMSNotification implements Notification {
    sendNotification(): void {
        console.log("Sending SMS notification...");
        // Logic to send SMS
    }
}

// High-level module
class NotificationService {
    private notification: Notification;

    constructor(notification: Notification) {
        this.notification = notification;
    }

    send(): void {
        this.notification.sendNotification();
    }
}

// Main.ts (Entry point)
const emailNotification = new EmailNotification();
const smsNotification = new SMSNotification();

const emailNotificationService = new NotificationService(emailNotification);
const smsNotificationService = new NotificationService(smsNotification);

emailNotificationService.send(); // Sends email notification
smsNotificationService.send();   // Sends SMS notification
