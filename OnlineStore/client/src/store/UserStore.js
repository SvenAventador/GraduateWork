import {makeAutoObservable} from "mobx" // слежка за изменениями переменных, которые будут переданы в параметр функции

export default class UserStore {

    constructor() {

        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)

    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() { // гетеры для оптимизации переменных, которые были изменены
        return this._isAuth
    }

    get user() { // гетеры для оптимизации переменных, которые были изменены
        return this._user
    }

}