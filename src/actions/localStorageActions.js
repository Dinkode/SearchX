export const getItem = async (type) => {
    let item;
    try {
        const obj = await localStorage.getItem(type);
        if (obj !== null) {
            item = JSON.parse(obj)
        }
    } catch (e) {
        item = null;
    }
    return item
};

export const setItem = (item, type) => {
    try {
        const obj = JSON.stringify(item);
        localStorage.setItem(type, obj);
    } catch (e) {
    }
};
