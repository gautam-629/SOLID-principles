// Suppose we have a UserService class responsible for managing user-related operations, and it depends on a UserRepository class to interact with the database. 
//Instead of creating an instance of UserRepository inside
// UserService, we'll inject it from outside.

// UserRepository.ts
class UserRepository {
    saveUser(user: any): void {
        // Logic to save user to the database
        console.log("User saved:", user);
    }
}

// UserService.ts
class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    createUser(user: any): void {
        // Business logic to create a user
        this.userRepository.saveUser(user);
    }
}

// Main.ts (Entry point)
const userRepository = new UserRepository(); // Creating UserRepository instance
const userService = new UserService(userRepository); // Injecting UserRepository into UserService

const user = { name: "John", email: "john@example.com" };
userService.createUser(user); // Creating a user using UserService
