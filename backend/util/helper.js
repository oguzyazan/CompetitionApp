const isArrayEmptyOrInvalid = (array) => {
    if (Array.isArray(array) && array.length > 0)
        return false;

    return true;
}

module.exports = {
    isArrayEmptyOrInvalid
}