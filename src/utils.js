export function deepDefaults(dest, src) {

    if (isUndefined(dest) || isNull(dest) || !isPlainObject(dest)) {
        return dest;
    }

    if (isUndefined(src) || isNull(src)) {
        return dest;
    }

    Object.entries(src).forEach(([ k, v ]) => {
        if (isUndefined(dest[k])) {
            dest[k] = v;
        } else if (isPlainObject(v)) {
            deepDefaults(dest[k], v);
        }
    });

    return dest;

}

export function isUndefined(obj) {
    return obj === undefined;
}

export function isNull(obj) {
    return obj === null;
}

export function isPlainObject(obj) {

    if (!obj || typeof obj !== 'object') {
        return false;
    }

    const prototype = Object.getPrototypeOf(obj);
    return prototype === null || prototype === Object.prototype;

}
