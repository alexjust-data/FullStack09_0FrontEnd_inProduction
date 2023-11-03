Me creo un proyecto npm porque voy a crear dependencias

```sh
npm init -y
```

Trabajando con Boostrap, los links son de la web

```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>

```

`Emmet` es una herramienta de productividad para desarrolladores web que permite escribir HTML y CSS de forma más rápida y eficiente mediante abreviaturas.
- Escribe una abreviatura de Emmet. Por ejemplo, puedes escribir div>p{Hello World} para HTML.
- Presiona Tab en tu teclado.
- Después de presionar Tab, VSCode expandirá automáticamente la abreviatura de Emmet a su forma completa

```html
div.col>div.row`

    <div class="col">
        <div class="row"></div>
    </div>

div.col>div.row*3

    <div class="col">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
    </div>
```

Instalo TypesScript

```sh
# -D porque no lo necesitamos para que nuestra app funcione
npm i -D typescript


  "devDependencies": {
    "typescript": "^5.2.2"
  }
```


CDN : cdnjs.com

## webPack

Trabajaremos con `webPack` :

> webpack es una herramienta de construcción de paquetes (o "bundler" en inglés) muy popular en el desarrollo web moderno. Su principal función es tomar el código fuente y los recursos de una aplicación (como JavaScript, CSS, imágenes, fuentes, etc.) y transformarlos y empaquetarlos de manera que sean más eficientes y fáciles de usar en un entorno de producción web.

Instalo TypesScript

```sh
# -D porque no lo necesitamos para que nuestra app funcione
npm i -D webpack

./package.js:

  "devDependencies": {
    "typescript": "^5.2.2",
    "webpack": "^5.89.0"
  }
```

le meto los scrips

```sh
  "scripts": {
    "build": "webpack"
  },
```
Si nosotros ponemos aquí un nombre a librería, el propio script tiene acceso a no de módulos como su paz, es decir, Webpack lo buscará en primera instancia aquí y si no lo encuentras aquí lo buscaría en nuestro Npn Global pues yo voy a instalar este web para si quiero como nos.

INstalamos librería

```sh
npm i -D webpack-cli


  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.2.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4" # esta es nuestra libreria de consola
  }
}
```

Creamos el archivo configuración `webpack.config.js`  . Definimos un punto de entrada 

```js
module.exports = {
    entry: './src/index.js'
}
```

Añado la carpeta `scr` y le añado un archivo `index.js` 

```js
// index.js
console.log("hola mundo")
```
consola

```sh
npm run build
```

verás que se ha creado al carpeta dist. Ahora tenemos lo minimo imprescindible.

Y nos genera una carpeta nueva aquí. Dits que si os fijáis a mí, ya me sale en gris clarito, eso es porque es no es que sea una buena práctica, es que es casi casi obligatorio que todo aquello que podamos obtener en nuestro proyecto sin necesidad de programar, como pueden ser archivos compilados de producción, librerías dependencias, todas esas cosas que podemos obtener en nuestro ordenador no tienen quesubirse nunca a un repo. ¿Vale? Por eso `node_modules` no se versiona los archivos de distribución no se versionan.Pues son cosas que con herramientas podemos obtener, es decir, yo cuando me clono este repositorio de 0 y a un npl install el node_module se me rellena solo, cuando hago un np de rambot el archivo de distribución o el la carpeta de distribución se me rellena sola por lo tanto estos archivos que se puedengenerar automáticamente, no se suben nunca al repositorio. Los ponemos en el `.gitignore`


pero tenemos que entender eso como un básico vale de hecho es algo que en las entrevistas de trabajo se mira muchísimo yo lo veo muchísimo porque para mí eso es un básico, es decir, si te encuentras no de módulos versionado ya es un ejemplo deque las cosas se han hecho rápido o nos han mirado suficientes o nos han hecho suficiente cariño.

Ahora dentro de Dist está el clone de index.js

---

Ahora añadimos en `webpack.config.js`:

```js
module.exports = {
    entry: './src/index.js',
    mode: 'development' // le estamos diciendo que estamos mdo desarrollador
}
```

Ahora ya ha completado más en index.js

Me instalo una librería

```sh
npm i lodash
```

podemos decirle donde queremos el archivo

```js
module.exports = {
    entry: './src/index.js',
    mode: 'development' // le estamos diciendo que estamos mdo desarrollador
    output:{
        filename: 'bundle.js', // creamos archivo
        path: __dirname + '/dist' // __dirname resuelve al path absoluto de donde estamos en ese momento. Yo le digo que la quiero ahí
        clean: true, // esto nos limpiará el index de /dist
    }
}


npm run build
```

Esto es lo minimo.

Yo le puedo decir que tenga varias entradas. Creo la entrada tipo archivo app.js en `scr`

```js
module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js',
    },
    mode: 'development' // le estamos diciendo que estamos mdo desarrollador
    output:{
        filename: '[name].bundle.js', // creamos name.lo que sea
        path: __dirname + '/dist' // __dirname resuelve al path absoluto de donde estamos en ese momento. Yo le digo que la quiero ahí
        clean: true, // esto nos limpiará el index de /dist
    }
}
```

---

Hasta ahora en index.html teníamos importado el script
<script src="js/home/main.js"></script>
ahora importamos
<script src="dist/index.bundle.js"></script>



**sourcemaps**

con esta herramiento el compilador entiende el origen de nuestra archivo, definimos nuestro sourmaps para definir donde está el origen de nuestra aplicacion `devtool: 'inline-souce-map',`

```js
module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist', 
        clean: true
    }
}
```


Entonces ahora sabemos cómo crear el bander. Y sabemos porque es necesario crear ese software, ya que podremos trabajar con archivos.Todo lo descentralizado, que queramos, por decirlo alguna manera, en tantos archivos como gramos. Generaremos un único archivo de destino.Pero incluso cuando trabajamos con nuestro archivo de destino en nuestro fichero Html y necesitamos investigarlo.Un conchavelo que sigue con Charlotte. Nos vayamos a ver dónde se pinta. Nuestras herramientas de desarrollo son capaces de decirnos en qué archivo y en qué línea

app.js
```js
const hola = "hola";
const mundo = "mundo";


console.log(`${hola} ${mundo}`);

export function printConsole(text) {
    console.log(text)
}

// así exportamos la función como una variable
export default {
    printConsole: printConsole
}
```

```js
import _ from 'lodash';
import join from 'lodash/join';
import { printConsole } from './app';
// así importamos la función como una variable
import printConsole from './app';
import app from './app';

const hello = "hola";
const mundo = "mundo"; 

console.log(`${hello} ${mundo}`);
console.log(_.join([hello, mundo]));
console.log(join([hello, mundo]));

printConsole(`${hello} ${mundo}`);
app.printConsole(`${hello} ${mundo}`);
```

```sh
npm run build
```
(base) alex@Alexs-MacBook-Pro frontend-pro-main % git add .
(base) alex@Alexs-MacBook-Pro frontend-pro-main % git commit -m "Webpack1: initial config"

git tag -m  "Webpack1: initial config" -a 04.Webpack-1
---

empezamos a trabajar sobre la aplicacion y la vamos a migrar a una aplicacion profesinal.

Vacío la carpeta `src` y necesito ahí dentro un entryPoint para cada una de las páginas html. Si tenemos 3 páginas html vamoa  crear 3 entryPoints en JS.

en nuestro caso

src/contactPage.js
src/indexPage.js
src/teamsPage.js

si te fijas en los html, debajo donde está el scrip verás que has generado un scrip que te dice que en la carpeta js están tus nuevos archivos

```html
    <script src="js/home/main.js"></script>

    <!-- Referencias                        -->
    <!-- https://harrypotter.fandom.com/    -->
    <!-- https://www.wizardingworld.com/    -->
    <!-- Fin                                -->
```

vamos a la carpeta `home` y nos la traemos a `src/home`. Al archivo dentro de `home/main.js` le cambio el nombre a `index.js`

Dentro de `src` tenemos `home.js` vacío, voy y le digo:

```js
import './home' // porque dentro está index.js
```
cambio las entradas

```js
module.exports = {
    entry: {
        home: './src/homePage.js',
        teams: './src/teamsPage.js',
        contact: './src/contactPage.js',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist', 
        clean: true
    }
}
```

npm run build


voy a index.html

```html
    <script src="dist/home.bundle.js"></script>

    <!-- Referencias                        -->
    <!-- https://harrypotter.fandom.com/    -->
    <!-- https://www.wizardingworld.com/    -->
    <!-- Fin                                -->
```



---

vamos a la carpeta `/js` y nos arrastramos las carpetas `team` y `form` dentro de `scr`. Eliminamos la carpeta `js` vacía.

para no tener que llamar a `form/main` o `team/main` renombramos enstos archivos como `form/index` o `team/index`

luego en los archivos 

teamsPage.js',
contactPage.js', 

añadimos

import './form'
import './team'


Ahora cambiamos los scriipts de los html

```html
    <script type="module" src="dist/teams.bundle.js"></script>

    <!-- Referencias                        -->
    <!-- https://harrypotter.fandom.com/    -->
    <!-- https://www.wizardingworld.com/    -->
    <!-- Fin     
```


```html
    <script type="module" src="dist/contact.bundle.js"></script>

    <!-- Referencias                        -->
    <!-- https://harrypotter.fandom.com/    -->
    <!-- https://www.wizardingworld.com/    -->
    <!-- Fin                                -->
```

---

Ahora atacamos en archivo `css` y queremos simplificarlo al máximo posible. NOrmalmente tenemos más de dos estiles en cada html

```html
    <!-- CSS -->
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/team.css">

```

importamos dependencias

```sh
npm i -D css-loader style-loader


  "devDependencies": {
    "css-loader": "^6.8.1",
    "style-loader": "^3.3.3",
    "typescript": "^5.2.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  },
```

1. Traemos la carpeta de estilos a `src`
2. como los diferentes estils css son archivos parciales, es decir, que las diferentes páginas utilizar´n an algún momento diferentes css. Por convención se pone un guión de late del nombre del archivo. Es por convención, buena práctica, así cuando un desarrollador venga y lo veo lo entenderá. `_form.css`
3. Para salvar las diferencias que puedan haber entre diferentes navegadores creamos el archivo `_reset.css` copiamos de la página por ejemplo https://meyerweb.com/eric/tools/css/reset/index.html
4. Creamos archivos `src/css/home.css`, `src/css/team.css`, `src/css/contact.css`   
5. Vamos a cada una de ellos. home.css

```js
// home.css
@import url('./_common.css');
@import url('./_home.css');
@import url('./_reset.css');

// team.css
@import url('./_common.css');
@import url('./_team.css');
@import url('./_reset.css');

// contact.css
@import url('./_common.css');
@import url('./_form.css');
@import url('./_reset.css');
```
cambiamos los .js

```js
//teamPages.js
import './team'
import './css/team.css'
//constctPages.js
import './form'
import './css/contact.css'
//homePages.js
import './home'
import './css/home.css'
```
1. Cualquier cosa adicional que queramos que tenga nuestro css añadiremos en `webpack.config.js` nuestro `modulo:` y ahí definiremos tantas reglas como queramos.

```sh
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['styl-loader', 'css-loader'], # esto cargará de derecha a izquierda
          }
        ]
    }
}
```
Esto significa que nuestros archivo `homePage.js` ya carga los estiles porque le he puesto la linea `import './css/home.css'` esto significa que nuestros html ya sobran estas lineas y se las quitamos a cada html:

```html
    <!-- CSS -->
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/home.css">
```
Esto es así porque le hemos cargado un archivo js que viene de 

```html
    <script type="module" src="dist/home.bundle.js"></script>
```
y dist/home.bundle.js se encargará de cargarlo todo, tanto la parte de js como css

---


webpack typescript https://webpack.js.org/guides/typescript/ sigo los pasos de aquí


instalamos dependecnias

```sh
npm install --save-dev typescript ts-loader
```

creo archivo `tsconfig.json`

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
````

me llevo las rules que me da la página web a `webpack.config.js`

```sh

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      //también

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
````

a `webpack.congif.js`

```json
module.exports = {
    entry: {
        home: './src/homePage.js',
        teams: './src/teamsPage.js',
        contact: './src/contactPage.js',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist', 
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
}
```


En la carpeta `team/` cambio todas las extensiones de los archivos

`scr/team/contactPage.ts`
`scr/team/homePage.ts`
`scr/team/teamsPage.ts`

y cambiamos el nombre a las entradas

```json
module.exports = {
    entry: {
        home: './src/homePage.ts',
        teams: './src/teamsPage.ts',
        contact: './src/contactPage.ts',
    },
```

verás que ha generado cosas en los bundlers


A partir de ahora vamos a trabajar con typescript. Ahora vamos a tipar nuestra aplicación:

1. CVamos a sobreescribir todos los nombres de archivos dentro de scr/../.. de js a ts

 npm run build

 y vemos los primeros errores de typescript. Hay que tiparlo, por ejemplo

 ```js
export const renderError = (fromId, formName, value) => {
  const errorElement = document.querySelector(`#${fromId} .${formName}-error-message`);
  errorElement.classList.add('show');
  errorElement.textContent = value;
};
 ```

 to

 ```ts

 ```

 de

 ```js
const checkValidations = [
    'patternMismatch',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing',
  ];
  
  const errorMessages = {
    patternMismatch: 'Error en el patón definido',
    stepMismatch: 'Valor númerico en un intervalo incorrecto',
    tooLong: 'Valor demasiado largo',
    tooShort: 'Valor demasiado corto',
    typeMismatch: 'El tipo no es el correcto',
    valueMissing: 'Campo requirido',
  };
  
  export const getErrorMessages = (validateState: ) => {
    if (validateState.valid) return '';
    return checkValidations.reduce((acum, validateStateKeys) => {
      if (validateState[validateStateKeys]) {
        return `${acum} ${errorMessages[validateStateKeys]}`;
      }
      return acum;
    }, '').trim();
  };
 ```

 ```ts
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

 ```

yo uso chatgtp y lo repaso. Tienes faena con eto.


BABEL:
Babel es un transpilador de JavaScript ampliamente utilizado que permite a los desarrolladores escribir código en la última versión de JavaScript y luego convertirlo a una versión anterior para garantizar la compatibilidad con navegadores y entornos más antiguos. En otras palabras, te permite utilizar características modernas de JavaScript que quizás no sean compatibles con todos los navegadores o entornos, y Babel se encarga de transformar ese código a una versión que sí lo sea.


Camio esta linea del `webpack.config.js`

```json
filename: '[name].bundle.js',
// por esta
filename: '[name].[chunkhash]bundle.js',
````

este cambio hará que los archivos `dist/contact.31190688166584878b6c.bundle` nos encontremos el hash. Esto es lo normal porque loque queremos es  trabajar con elos minimos problemas de caché, de esta manera lo que estamos diciendo a webpack es que cada vez que hagamos una distribucion  nueva en nuestra app el fichero compilado se llamará diferente, por lo tanto si el navegador de cliente vuelve a pedir el archivo, para ese navegador será un archivo nuevo y se rescatará por primera vez. 

si cargamos la app `npm run build` nuestro html no reconoce este js  
<script type="module" src="dist/home.bundle.js"></script>   

entonces hemos de trabajar con pugins de forma dinámica desde ahora con html.
La diferencia entre plugin y loader es que :
- cualquier cosa que empice por uno de nuestros `entrypoints`  y acabe trabajando con archivos pasarán por un loader. (slides, pag bundle your scripts)

**plugins**

se instalan como dependencias nuevas, cada uno tiene congif diferente, hay que mirar doc y ver como trabajan. 

Ahora queremos salvar el problema del hash y manipular el html

Todo lo que está fuera de `src` como mucho serán configuraciones, todo lo que esté dentro será nuetro código fuente.

1. nos llevamos las imágenes `img` dentro de `src`
2. compilamos `npm run build` y vemos que peta porque quiere solucionar una imagen que no existe ahora.
   ERROR in ./src/css/_common.css (./node_modules/css-loader/dist/cjs.js!./src/css/_common.css) 5:36-84
3. vamos a commons.css 
   ```css
     /* HEADER */
     section#header {
        background-image: url('../img/header.jpg');
        ...
   ```

Instalamos puligin para trabajat html
```sh
npm i -D html-webpack-plugin
```

Vamos a `weppack.config.js`

```js
//llamo al plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
```
debajo de modules

```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html'
        }),
```

genero carpeta `src/templates/` y meto dentro del `index.html`.  
En el index.html no necesitamos el script este: ` <script type="module" src="dist/home.bundle.js"></script>` porque webpack lo incrustará

Si te vas a `dist` verás un index.html con lo mismo, y a partir de ahora la app atacará a este `dist/index.html` cuando compile la app.

Verás ahora que la imagen del logo tiene problemas. Veta al `template/index.html` y busca la linea del logo.
cambias esto:
```html
<img src="../img/logo.png"" alt="Quidditch Games XV">

// por esto

<img src="<%=require("../img/logo.png")%>" alt="Quidditch Games XV">

```

Ahora tenemos errores porque no lee las imagenes por eso vamos a cargar el LOADER. Añadimos en `weppack.exports`

```js
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'assrt/resource'
            }

// estas lineas van en rules de module

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/i, // metemos todas la imagenes
                type: 'asset/resource'
            }
        ]
    },
```




si te vas a mirar el `dist/index.html`verás como el logo de la cabecera ha cambiado, ha añadido el hash de la imagen `<img src="9a96fe53e9bb753456d6.png" alt="Quidditch Games XV">`

volvemos al `template/index.html`

``html
<footer class="footer">
        <img src="img/logo.png" alt="Harry Potter - Quidditch Games XV">

//cambiamos por

 <footer class="footer">
        <img src="<%=require("../img/logo.png")%>" alt="Harry Potter - Quidditch Games XV">
```

aún tenemos herrores pero ahora lo veremos.

- Ahora migramos las otras html a dentro templates/
- Cambiamos las lineas del logos `<img src="<%=require("../img/logo.png")%>"`
  
  Cuando trabajemos con framesworks no haremos tantas cositas así

