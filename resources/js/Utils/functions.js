export const searchInObj = (obj, id) => {
    for (const key in obj) {
        if (obj[key].value === id) return obj[key];
    }
    return 0;
}