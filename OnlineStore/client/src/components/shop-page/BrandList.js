import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const BrandList = observer(() => {
    const {device} = useContext(Context)

    /**
     * Реализация функции для кнопки "Показать еще".
     */
    const showMoreButton = () => {
        const showMore = document.querySelector('.brandbar__btn--show')
        const typeLength = document.querySelectorAll('.brandbar__list--item').length
        let item = 3

        showMore.addEventListener('click', () => {
            item += 3
            const array = Array.from(document.querySelector('.brandbar__list').children)
            const visibleItem = array.splice(0, item)

            visibleItem.forEach(element => element.classList.add('is-visible'))

            if (visibleItem.length === typeLength) {
                showMore.style.display = 'none'
            }
        })
    }

    return (
        <ListGroup>
            {device.brand.map(brands =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={brands.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrands(brands)}
                    key={brands.id}
                >
                    {brands.nameBrand}
                </ListGroup.Item>
            )}

            <ListGroup.Item
                style={{cursor: 'pointer', background: '#56BDC5'}}
                onClick={() => {
                    device.setSelectedBrands({})
                }}
            >
                Очистить фильтры
            </ListGroup.Item>
        </ListGroup>
    );
});

export default BrandList;