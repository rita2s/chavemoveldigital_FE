export const validateTelephoneNumber = (value) => {
    if (!value) return "Campo obrigatório";
    if (!/^((\+351)?\d{9})$/.test(value)) return "Formato errado";
    return "";
};

export const validatePin = (value) => {
    if (!value) return "Campo obrigatório";
    if (!/^\d{4}$/.test(value)) return "Insira 4 digitos";
    return "";
};

export function formatTelephoneNumberForSubmission(value) {
    if (/^\d{9}$/.test(value)) {
        return `+351${value}`;
    }
    return value;
}
