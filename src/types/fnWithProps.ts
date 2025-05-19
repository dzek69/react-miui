/**
 * Creates a function with additional properties, automatically typing the function properly
 *
 * Remember, that this function is not a clone, it's the original one being mutated.
 *
 * @param fn - The function to which you want to add properties
 * @param props - The properties you want to add to the function
 */
const fnWithProps = <T extends (...args: any[]) => any, P extends object>( // eslint-disable-line @typescript-eslint/no-explicit-any,max-len
    fn: T,
    props: P,
): T & P => {
    return Object.assign(fn, props);
};

export { fnWithProps };
