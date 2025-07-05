export const inputsDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TELEPHONE_NUMBER':
            return {
                ...state,
                telephoneNumber: {
                    ...state.telephoneNumber,
                    value: action.payload.value,
                    error: action.payload.error
                }
            };
        case 'SET_PIN':
            return {
                ...state,
                pin: {
                    ...state.pin,
                    value: action.payload.value,
                    error: action.payload.error
                }
            };
        case 'SET_CODE':
            return {
                ...state,
                code: {
                    ...state.code,
                    value: action.payload.value,
                    error: action.payload.error
                }
            };
        default:
            return state;
    }
};

export const initialInputsDetails = {
    title: "chave móvel digital",
    telephoneNumber: {
        label: "Número de Telemóvel",
        type: "text",
        name: "telephoneNumber",
        value: "",
        error: ""
    },
    pin: {
        label: "Inserir PIN",
        type: "password",
        name: "pin",
        value: "",
        error: ""
    },
    code: {
        label: "Código de validação",
        type: "text",
        name: "code",
        value: "",
        error: ""
    },
};
