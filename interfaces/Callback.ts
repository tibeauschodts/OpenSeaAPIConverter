/**
 * This TypeScript interface represents what we want to return in a callback function.
 * Source: https://www.bennadel.com/blog/3217-defining-function-and-callback-interfaces-in-typescript.htm
 */

 export interface Callback {
    ( error: Error, result?: any ) : void;
}