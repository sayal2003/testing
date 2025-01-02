export const getUserdata = (data) => {
    // console.log(data, "action data =======>");
    return {
        type: "USER_SUBMIT",
        payload: data
    }
}

export const deleteUserData = (data) => {
    return {
        type: "USER_DELETE",
        payload: data
    }
}

export const editUserData = (data) => {
    return {
        type: "USER_EDIT",
        payload: data
    }
}