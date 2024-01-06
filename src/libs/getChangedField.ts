/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getChangedField<T extends Record<string, any>>(initialValues: T, values: T): Partial<T> {
    const changedField: Partial<T> = {};

    for (const key in values) {
        if (Object.prototype.hasOwnProperty.call(values, key) && initialValues[key] !== values[key]) {
            changedField[key] = values[key];
        }
    }

    return changedField;
}
