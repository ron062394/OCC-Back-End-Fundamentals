class Shape {
    constructor (w, h) {
        this.width = w;
        this.height = h;
    }

    calculateArea() {
        throw new Error("Method not implemented.")
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log("Width * Height = Area of a Rectangle");
    }

    calculateArea() {
        let area = this.width * this.height;
        console.log(`${this.width} * ${this.height} = ${area}`);
    }
}

const shape1 = new Rectangle(7, 3);
shape1.displayFormula();
shape1.calculateArea();