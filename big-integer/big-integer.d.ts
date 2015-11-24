// Type definitions for BigInteger.js
// Project: https://github.com/peterolson/BigInteger.js
// Definitions by: Ingo Bürk <https://github.com/Airblader>, Roel van Uden <https://github.com/Deathspike>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BigInteger {
    /** Performs addition */
    add(number: number | string | BigInteger): BigInteger;

    /** Alias for the add method. */
    plus(number: number | string | BigInteger): BigInteger;

    /** Alias for the subtract method. */
    minus(number: number | string | BigInteger): BigInteger;

    /** Performs subtraction. */
    subtract(number: number | string | BigInteger): BigInteger;

    /**  */
    negate(): BigInteger;

    /** Returns the absolute value of a bigInt. */
    abs(): BigInteger;

    /** Performs multiplication. */
    multiply(number: number | string | BigInteger): BigInteger;

    /** Alias for the multiply method. */
    times(number: number | string | BigInteger): BigInteger;

    /**  */
    square(): BigInteger;

    /** Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder will match the sign of the dividend. */
    divmod(number: number | string | BigInteger): { quotient: BigInteger; remainder: BigInteger };

    /** Performs integer division, disregarding the remainder. */
    divide(number: number | string | BigInteger): BigInteger;

    /** Alias for the divide method. */
    over(number: number | string | BigInteger): BigInteger;

    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod(number: number | string | BigInteger): BigInteger;

    /**  */
    remainder(number: number | string | BigInteger): BigInteger;

    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow(number: number | string | BigInteger ): BigInteger;

    /**  */
    modPow(exp: number | string | BigInteger, mod: number | string | BigInteger): BigInteger;

    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs(number: number | string | BigInteger): BigInteger;

    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare(number: number | string | BigInteger): BigInteger;

    /** Checks if two numbers are equal. */
    equals(number: number | string | BigInteger): boolean;

    /** Checks if two numbers are not equal. */
    notEquals(number: number | string | BigInteger): boolean;

    /** Checks if the first number is greater than the second. */
    greater(number: number | string | BigInteger): boolean;

    /** Checks if the first number is lesser than the second. */
    lesser(number: number | string | BigInteger): boolean;

    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals(number: number | string | BigInteger): boolean;

    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals(number: number | string | BigInteger): boolean;

    /** Returns true if the number is even, false otherwise. */
    isEven(): boolean;

    /** Returns true if the number is odd, false otherwise. */
    isOdd(): boolean;

    /** Return true if the number is positive, false otherwise. Returns true for 0 and false for -0. */
    isPositive(): boolean;

    /** Returns true if the number is negative, false otherwise. Returns false for 0 and true for -0. */
    isNegative(): boolean;

    /** Returns true if the number is +1, false otherwise. */
    isUnit(): boolean;

    /** Returns true if the number is 0, false otherwise. */
    isZero(): boolean;

    /**  */
    isDivisibleBy(number: number | string | BigInteger): boolean;

    /**  */
    isPrime(): boolean;

    /**  */
    isProbablePrime(): boolean;
    /**  */
    isProbablePrime(iterations: number): boolean;

    /** Adds one to the number. */
    next(): BigInteger;

    /** Subtracts one from the number. */
    prev(): BigInteger;

    /**  */
    shiftLeft(n: number | string | BigInteger): BigInteger;

    /**  */
    shiftRight(n: number | string | BigInteger): BigInteger;

    /** Performs the bitwise NOT operation. */
    not(): BigInteger;

    /** Performs the bitwise AND operation. */
    and(number: number | string | BigInteger): BigInteger;

    /** Performs the bitwise OR operation. */
    or(number: number | string | BigInteger): BigInteger;

    /** Performs the bitwise XOR operation. */
    xor(number: number | string | BigInteger): BigInteger;

    /** Converts a bigInt to a string. */
    toString(): string;

    /** Converts a bigInt to a native Javascript number. This override allows you to use native arithmetic operators without explicit conversion. */
    valueOf(): number;

    /** Converts a bigInt into a native Javascript number. Loses precision for numbers outside the range. */
    toJSNumber(): number;
}

interface BigIntegerStatic {
    /** Equivalent to bigInt(1) */
    one: BigInteger;
    /** Equivalent to bigInt(0) */
    zero: BigInteger;
    /** Equivalent to bigInt(-1) */
    minusOne: BigInteger;

    /**  */
    max(a: number | string | BigInteger, b: number | string | BigInteger): BigInteger;
    /**  */
    min(a: number | string | BigInteger, b: number | string | BigInteger): BigInteger;
    /**  */
    gcd(a: number | string | BigInteger, b: number | string | BigInteger): BigInteger;
    /**  */
    lcm(a: number | string | BigInteger, b: number | string | BigInteger): BigInteger;
    /**  */
    randBetween(a: number | string | BigInteger, b: number | string | BigInteger): BigInteger;

    /** Equivalent to bigInt(0) */
    (): BigInteger;
    /** Parse a Javascript number into a bigInt */
    (number: number): BigInteger;
    /** Parse a string into a bigInt */
    (string: string, base?: number | string | BigInteger): BigInteger;
    /** no-op */
    (bigInt: BigInteger): BigInteger;
}

declare var bigInt: BigIntegerStatic;

declare module "big-integer" {
    export = bigInt;
}
