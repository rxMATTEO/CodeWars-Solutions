type VectorArray = number[];


export class Vector {
  public coms: VectorArray
  constructor(coms: VectorArray) {
    this.coms = coms;
  }
  add(vector: Vector): Vector {
    if(vector.coms.length !== this.coms.length) throw new Error();
    const newArray: VectorArray = vector.coms.map( (com, index) => com + this.coms[index] ) as VectorArray;
    return new Vector(newArray);
  }
  subtract(vector: Vector): Vector {
    if(vector.coms.length !== this.coms.length) throw new Error();
    const newArray: VectorArray = vector.coms.map( (com, index) => this.coms[index] -  com ) as VectorArray;
    return new Vector(newArray);
  }
  dot(vector: Vector): number {
    if(vector.coms.length !== this.coms.length) throw new Error();
    const dots: number = vector.coms.reduce( (prev, com, index) => prev + (this.coms[index] *  com), 0);
    return dots
  }
  norm(): number {
    const dots: number = this.coms.reduce( (prev, com, index) => prev + (com **  2), 0);
    return Math.sqrt(dots)
  }
  toString(){
    return `(${this.coms.toString()})`;
  }
  equals(vector: Vector): boolean{
    return vector.coms.reduce((prev, currentValue, currentIndex) => currentValue === this.coms[currentIndex], false)
  }
}