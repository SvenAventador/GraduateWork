import React, {useEffect, useState} from 'react';
import star from "../../resources/img/device/star.png"
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/consts";
import {getOneBrand} from "../../http/deviceAPI";

const DeviceItem = ({device, deviceBrandId}) => {
    const history = useNavigate()

    const [brandName, setBrandName] = useState('')
    useEffect(() => {
        getOneBrand(deviceBrandId).then(data => {
            setBrandName(data.nameBrand)
        })

    }, [deviceBrandId])

    return (
        <article className="device" onClick={() => {history(DEVICE_ROUTE + '/' + device.id)}}>
            <div className="device__image flex">
                <img src={process.env.REACT_APP_API_URL + device.img} alt="Device Image" aria-label={"Device image"}/>
            </div>

            <div className="device__info flex">
                <h3 className="device__title">
                    {brandName}
                </h3>

                <div className="device__rating flex">
                    <h3 className="device__rating--rate">{device.rating}</h3>
                    <img src={star}
                         alt="Star image"
                         aria-label={"Star label"}
                         className="device__rating--star" />
                </div>
            </div>

            <div className="device__name">{device.nameDevice}</div>

            <h3 className="device__price">{device.priceDevice + " руб"}</h3>

            <div className="device__add">
                <button className="device__add--btn btn-reset flex">
                    Добавить в корзину
                </button>
            </div>

        </article>
    );
};

export default DeviceItem;