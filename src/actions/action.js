
function toggle() {
    return {type: 'TOGGLE_IS_ADDING'};
}

function addItem(note) {
    return {type: 'ADD_ITEM', item: note};
}

function removeItem(index) {
    return {type: 'REMOVE_ITEM', index};
}

module.exports = {
    toggle,
    addItem,
    removeItem
}