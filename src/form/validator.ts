// Define un tipo para las validaciones
type ValidationKey = 
  | 'patternMismatch'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'typeMismatch'
  | 'valueMissing';

// Usa el tipo anterior para la constante checkValidations y para el objeto errorMessages
const checkValidations: ValidationKey[] = [
    'patternMismatch',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing',
];

const errorMessages: Record<ValidationKey, string> = {
    patternMismatch: 'Error en el patón definido',
    stepMismatch: 'Valor númerico en un intervalo incorrecto',
    tooLong: 'Valor demasiado largo',
    tooShort: 'Valor demasiado corto',
    typeMismatch: 'El tipo no es el correcto',
    valueMissing: 'Campo requirido',
};

// Define un tipo para el estado de validación. Todos los campos son opcionales
// porque no sabemos si siempre se incluirán todos.
interface ValidateState {
    patternMismatch?: boolean;
    stepMismatch?: boolean;
    tooLong?: boolean;
    tooShort?: boolean;
    typeMismatch?: boolean;
    valueMissing?: boolean;
    valid?: boolean;
}

// Usa el tipo ValidateState para la función getErrorMessages
export const getErrorMessages = (validateState: ValidateState): string => {
    if (validateState.valid) return '';
    return checkValidations.reduce((acum, validateStateKeys) => {
        if (validateState[validateStateKeys]) {
            return `${acum} ${errorMessages[validateStateKeys]}`;
        }
        return acum;
    }, '').trim();
};


  