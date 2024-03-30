// Objects of a superclass should be replaceable with objects of a subclass
// without affecting the correctness of the program. In other words, a subclass should be able to substitute its superclass without changing the desirable properties of the program. This principle ensures that inheritance hierarchies are well-designed and that derived classes don't violate the expectations of clients using the base class.


//Liskov Substitution Principle (LSP) 
class BaseUser{   // add to solve problems
    getRole(){
        console.log("User Role")
    }
}

class User extends BaseUser{
    getAccessLevel(){
        console.log('User access Level')
    }
    
}

class Admin extends User{
    getAccessLevel(): void {
        console.log('Admin access level')
    }
    getRole(): void {
        console.log("admin role")
    }
}
class Manger extends User{
    getAccessLevel(): void {
        console.log("Manger access Level")
    }
    getRole(): void {
        console.log("Manager Role");
    }
}
class Customer extends BaseUser{
    getAccessLevel(): void {
        throw new Error("Customer has no access Level")
    }
    getRole(): void {
        console.log("Customer Role");
    }
}

function getUserAccessLevel(user:User){
    user.getAccessLevel()
}
getUserAccessLevel(new User())