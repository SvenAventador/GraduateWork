import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const TypeList = observer(() => {
    const {device} = useContext(Context)

    /**
     * Реализация функции для кнопки "Показать еще".
     */
    const showMoreButton = () => {
        const showMore = document.querySelector('.typebar__btn--show')
        const typeLength = document.querySelectorAll('.typebar__list--item').length
        let items = 4

        showMore.addEventListener('click', () => {
            items += 3
            const array = Array.from(document.querySelector('.typebar__list').children)
            const visibleItem = array.splice(0, items)

            visibleItem.forEach(element => element.classList.add('is-visible'))

            if (visibleItem.length === typeLength) {
                showMore.style.display = 'none'
            }
        })
    }

    return (
        <ListGroup>
            {device.type.map(types =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={types.id === device.selectedTypes.id}
                    onClick={() => device.setSelectedTypes(types)}
                    key={types.id}
                >
                    {types.nameType}
                </ListGroup.Item>
            )}

            <ListGroup.Item
                style={{cursor: 'pointer', background: '#56BDC5'}}
                onClick={() => {
                    device.setSelectedTypes({})
                }}
            >
                Очистить фильтры
            </ListGroup.Item>
        </ListGroup>
    );
});

export default TypeList;