interface Values {
    name: string;
    age: string;
}

const renderTemplate = (values: Values) => {
    return `Hola me llamo ${values.name} y tengo ${values.age} años!`;
}