export const AUTHED_USER = 'AUTHED_USER'
export const CHANGE_AUTHED_USER = 'CHANGE_AUTHED_USER'

export function getAuthedUser(id) {
    return {
        type: AUTHED_USER,
        id,
    }
}

export function changeAuthedUser(id) {
    return {
        type: CHANGE_AUTHED_USER,
        id,
    }
}
