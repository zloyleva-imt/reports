import { isValidPhoneNumber } from 'react-phone-number-input';

const translate = {
    required: "Обязательное поле",
    mimeType: "Тип изображения должен быть ",
    imageSize: "Размер изображения должен быть не более ",
    email: "Не правильно введён Email",
    maxLength: "Максимальная длина",
    minLength: "Минимальная длина",
    phone: "Не правильно введён телефон, должно быть не менее 12 символов",
    alphaNumeric: "Необходимо вводить только цифры",
};
export const required = value => {
    if(value) return undefined;
    return `${translate.required}`
}
export const alphaNumeric = value =>
    value && /[0-9]/i.test(value)
        ? undefined
        : `${translate.alphaNumeric}`;
export const validateImageRequired = imageFile => {
    if (imageFile) {
        return undefined
    } else {
        return `${translate.required}`
    }
};
export const validateImageEditRequired = imageFile => {
    if (imageFile.hasOwnProperty("image")) {
        return `${translate.required}`
    } else {
        return undefined
    }
};
export const validateImageFormat = imageFile => {
    if (imageFile) {
        const mimeType = {
            mimeType: "image/jpeg, image/png",
        }
        if (!mimeType.mimeType.includes(imageFile.type)) {
            return `${translate.mimeType} ${mimeType.mimeType}`;
        }
    } else {
        return undefined;
    }
};
export const validateImageSize = imageFile => {
    if (imageFile && imageFile.size) {
        const imageFileKb = imageFile.size / 1024;
        const maxWeight = 4096;
        if (imageFileKb > maxWeight) {
            return `${translate.imageSize} ${ parseInt((maxWeight / 1024)) }Mb`;
        }
    }
};
export const emailTest = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        `${translate.email}` : undefined;

export const maxLengthCreator = (maxLength) => value => {
    if(value.length > maxLength) return `${translate.maxLength} ${maxLength} символов`;
    return undefined;
}
export const minLengthCreator = (minLength) => value => {
    if(value.length < minLength) return `${translate.minLength} ${minLength} символов`;
    return undefined;
}
export const validatePhoneNumber = phoneNumber => {
    if (!phoneNumber) return
    if (isValidPhoneNumber(phoneNumber)) return
    return 'This field must be a valid phone number'
}
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{11})$/i.test(value)
        ? `${translate.phone}`
        : undefined
