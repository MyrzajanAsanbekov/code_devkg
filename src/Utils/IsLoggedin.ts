import Cookies from "js-cookie"

export const isUserloggedin = (): boolean => {
    const token = Cookies.get("authToken")
    return token ? true : false

}