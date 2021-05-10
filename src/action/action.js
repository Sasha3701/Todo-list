import { ADD, CHANGE_STATUS, DELETE, THEME } from "./actionTypes"

export let addItem = item => {
    return {
        type: ADD,
        value: item
    }
}

export let deleteItem = id => {
    return {
        type: DELETE,
        value: id
    }
}

export let changeTheme = name => {
    return {
        type: THEME,
        value: name
    }
}

export let changeStatus = id => {
    return {
        type: CHANGE_STATUS,
        value: id
    }
}