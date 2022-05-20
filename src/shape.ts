export class Shape {
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    private _x: number;

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    private _y: number;

    get y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    toString(): string {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}