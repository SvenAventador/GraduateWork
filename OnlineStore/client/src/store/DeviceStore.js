import {makeAutoObservable} from "mobx" // слежка за изменениями переменных, которые будут переданы в параметр функции

export default class DeviceStore {

    constructor() {

        this._types = [
            {
                id: 1,
                nameType: 'Ноутбук'
            },
            {
                id: 2,
                nameType: 'Телефон'
            },
            {
                id: 3,
                nameType: 'Планшет'
            },
        ]
        this._brands = [
            {
                id: 1,
                nameType: 'Ноутбук'
            },
            {
                id: 2,
                nameType: 'Телефон'
            },
            {
                id: 3,
                nameType: 'Планшет'
            },
        ]

        this._devices = [
            {
                id: 1,
                nameDevice: 'IPhone 12',
                price: 100000,
                rating: 5,
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fcat-png-gifs&psig=AOvVaw3A2iSc0btO73xumCVEyo7w&ust=1674906045732000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj17LDV5_wCFQAAAAAdAAAAABAI'
            }
        ]
        makeAutoObservable(this)

    }

    setType(type) {
        this._types = type
    }

    setBrand(brand) {
        this._brands = brand
    }

    setDevice(device) {
        this._devices = device
    }

    get type() { // гетеры для оптимизации переменных, которые были изменены
        return this._types
    }

    get brand() { // гетеры для оптимизации переменных, которые были изменены
        return this._brands
    }

    get device() { // гетеры для оптимизации переменных, которые были изменены
        return this._devices
    }

}