export class Vector {
    coms;
    constructor(coms) {
        this.coms = coms;
    }
    add(vector) {
        if (vector.coms.length !== this.coms.length)
            throw new Error();
        const newArray = vector.coms.map((com, index) => com + this.coms[index]);
        return new Vector(newArray);
    }
    subtract(vector) {
        if (vector.coms.length !== this.coms.length)
            throw new Error();
        const newArray = vector.coms.map((com, index) => this.coms[index] - com);
        return new Vector(newArray);
    }
    dot(vector) {
        if (vector.coms.length !== this.coms.length)
            throw new Error();
        const dots = vector.coms.reduce((prev, com, index) => prev + (this.coms[index] * com), 0);
        return dots;
    }
    norm() {
        const dots = this.coms.reduce((prev, com, index) => prev + (com ** 2), 0);
        return Math.sqrt(dots);
    }
    toString() {
        return `(${this.coms.toString()})`;
    }
    equals(vector) {
        return vector.coms.reduce((prev, currentValue, currentIndex) => currentValue === this.coms[currentIndex], false);
    }
}
//# sourceMappingURL=VectorClass.js.map