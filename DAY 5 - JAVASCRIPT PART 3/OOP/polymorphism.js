//Polymorphism

class Animal {
    makeSound() {
        return 'The animal makes a noise.'
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ' I heard a dog bark'
    }
}


class Cat  extends Animal {
    makeSound() {
        return super.makeSound() + ' I heard a cat Meoow.'
    }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());


