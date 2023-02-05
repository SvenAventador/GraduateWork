import {$host, $authHost} from "./index";

/**
 * Реализация функции регистрации из контроллера.
 * @param userName - никнейм пользователя.
 * @param userEmail - почта пользователя.
 * @param userPassword - пароль пользователя.
 * @returns {Promise<void>}
 */
export const registration = async (userName, userEmail, userPassword) => {
    return await $host.post('api/user/registration', {userName, userEmail, userPassword})
}