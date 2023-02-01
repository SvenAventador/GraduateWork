import React from 'react';
import {observer} from "mobx-react-lite";
import search from "../../resources/img/header_buttons/search.png"
import auth from "../../resources/img/header_buttons/auth.png";
import cart from "../../resources/img/header_buttons/cart.png";
import {NavLink} from "react-router-dom";
import {CART_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

const LowHeader = observer(() => {
    return (
        <div className={"low-header flex"}>
            <div className="low-header__burger flex">
                <svg className={"low-header__burger--btn"}
                     viewBox="0 0 100 80"
                     width="40"
                     height="40">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                </svg>

                <span className={"low-header__burger--text"}>Каталог товаров</span>
            </div>

            <form action={""} method={"get"} className={"low-header__search"}>
                <input className={"low-header__search--string"}
                       type="text"
                       placeholder="Поиск среди тысячи товаров"/>
                <button className={"low-header__search--btn btn-reset"}
                        type="submit"
                        aria-label={"Search button"}>
                    <img src={search} alt="logo" aria-label={"Search logo"}/>
                </button>
            </form>

            <NavLink to={CART_ROUTE} className={"low-header__cart flex"}>
                <div className={"low-header__cart--img"}>
                    <img src={cart} alt="cart" aria-label={"Cart"}/>
                </div>
                <div className={"low-header__cart--text"}>Корзина</div>
            </NavLink>

            <NavLink className={"low-header__auth flex"} to={LOGIN_ROUTE}>
                <div className={"low-header__auth--img"}>
                    <img src={auth} alt="auth" aria-label={"auth"}/>
                </div>
                <div className={"low-header__auth--text"}>Войти</div>
            </NavLink>

        </div>
    );
});

export default LowHeader;