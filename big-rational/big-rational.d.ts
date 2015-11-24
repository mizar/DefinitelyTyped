// Type definitions for BigRational.js
// Project: https://github.com/peterolson/BigRational.js
// Definitions by: Mizar <https://github.com/mizar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BigRational {
    numerator: BigInteger;
    denominator: BigInteger;
    num: BigInteger;
    denom: BigInteger;

    /** Performs addition */
    add(number: number | string | BigInteger | BigRational): BigRational;
    /** Performs addition */
    add(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Alias for the add method. */
    plus(number: number | string | BigInteger | BigRational): BigRational;
    /** Alias for the add method. */
    plus(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Alias for the subtract method. */
    minus(number: number | string | BigInteger | BigRational): BigRational;
    /** Alias for the subtract method. */
    minus(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Performs subtraction. */
    subtract(number: number | string | BigInteger | BigRational): BigRational;
    /** Performs subtraction. */
    subtract(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Performs multiplication. */
    multiply(number: number | string | BigInteger | BigRational): BigRational;
    /** Performs multiplication. */
    multiply(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Alias for the multiply method. */
    times(number: number | string | BigInteger | BigRational): BigRational;
    /** Alias for the multiply method. */
    times(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Performs integer division, disregarding the remainder. */
    divide(number: number | string | BigInteger | BigRational): BigRational;
    /** Performs integer division, disregarding the remainder. */
    divide(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Alias for the divide method. */
    over(number: number | string | BigInteger | BigRational): BigRational;
    /** Alias for the divide method. */
    over(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Performs reciprocate */
    reciprocate(): BigRational;

    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod(number: number | string | BigInteger | BigRational): BigRational;
    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod(num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;

    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow(number: number | string | BigInteger): BigRational;

    /** Performs flooring */
    floor(): BigInteger;

    /** Performs ceiling */
    ceil(): BigInteger;

    /** Performs rounding */
    round(): BigInteger;

    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs(number: number | string | BigInteger | BigRational): number;
    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs(num: number | string | BigInteger, denom: number | string | BigInteger): number;

    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare(number: number | string | BigInteger | BigRational): number;
    /** 
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare(num: number | string | BigInteger, denom: number | string | BigInteger): number;

    /** Checks if two numbers are equal. */
    equals(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if two numbers are equal. */
    equals(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Alias for the equals method. */
    eq(number: number | string | BigInteger | BigRational): boolean;
    /** Alias for the equals method. */
    eq(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Checks if two numbers are not equal. */
    notEquals(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if two numbers are not equal. */
    notEquals(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Alias for the notEquals method. */
    neq(number: number | string | BigInteger | BigRational): boolean;
    /** Alias for the notEquals method. */
    neq(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Checks if the first number is lesser than the second. */
    lesser(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if the first number is lesser than the second. */
    lesser(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Checks if the first number is greater than the second. */
    greater(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if the first number is greater than the second. */
    greater(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals(number: number | string | BigInteger | BigRational): boolean;
    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals(num: number | string | BigInteger, denom: number | string | BigInteger): boolean;

    /** Returns the absolute value of a bigRat. */
    abs(): BigRational;

    /** Returns the negate value of a bigRat. */
    negate(): BigRational;

    /** Return true if the number is positive, false otherwise. Returns true for 0 and false for -0. */
    isPositive(): boolean;

    /** Returns true if the number is negative, false otherwise. Returns false for 0 and true for -0. */
    isNegative(): boolean;

    /** Returns true if the number is zero, false otherwise. */
    isZero(): boolean;

    /** Returns 10-digit string. */
    toDecimal(): string;
    /** Returns n-digit string. */
    toDecimal(n: number): string;

    /** Converts a bigRat to a string. */
    toString(): string;

    /** Converts a bigRat to a native Javascript number. This override allows you to use native arithmetic operators without explicit conversion. */
    valueOf(): number;
}

interface BigRationalStatic {
    /** Equivalent to bigRat(0) */
    zero: BigRational;
    /** Equivalent to bigRat(1) */
    one: BigRational;
    /** Equivalent to bigRat(-1) */
    minusOne: BigRational;

    /** Equivalent to bigRat(0) */
    (): BigRational;
    /** Parse a Javascript number into a bigRat */
    (number: number): BigRational;
    /** Parse a string into a bigInt */
    (string: string): BigRational;
    /** bigInt into a bigRat */
    (bigInt: BigInteger): BigRational;
    /** bigInt into a bigRat */
    (num: number | string | BigInteger, denom: number | string | BigInteger): BigRational;
    /** no-op */
    (bigRat: BigRational): BigRational;
}

declare var bigRat: BigRationalStatic;

declare module "big-rational" {
    export = bigRat;
}
