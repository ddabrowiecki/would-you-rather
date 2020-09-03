export const AUTHED_USER = 'AUTHED_USER'

export function getAuthedUser(id) {
    return {
        type: AUTHED_USER,
        id,
    }
}