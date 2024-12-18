import { CalculateClassesParam } from '../models/CalculateClassesParam';
/**
 * Returns a string that contains the class value based on the opts parameter.
 * @param opts
 */
export declare function calculateClasses(opts?: CalculateClassesParam): string;
export declare function contains(ancestorElement: HTMLElement, descendantElement: HTMLElement): boolean;
export declare const cleanUndefinedProps: (item: any) => {};
/**
 * Filters by truthy value and joins items with space by default
 */
export declare const joinArrayValues: (list: any[], joinChar?: string) => string;
