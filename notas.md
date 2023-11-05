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

En el index.html no necesitamos el script este: 
` <script type="module" src="dist/home.bundle.js"></script>` 
porque webpack lo incrustará

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
                test: /\.(png|jpg|gif|webp|ico)$/i, // metemos todas la imagenes
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

aún tenemos errores pero ahora lo veremos.

- Ahora migramos las otras html a dentro templates/
- Acuerdate que al meterlas dentro de /templates dentro del html ya no hace falta el scrip js que importamos , so los borras de cada html `<script type="module" src="dist/contact.bundle.js"></script>` 
- Cambiamos las lineas del logos `<img src="<%=require("../img/logo.png")%>"`
- cambiamos así cualquier imagen de los html para que tengan la semantica requerida, es decir todas las imagenes como variables
`<link rel="icon" type="image/png" href="<%=require("../img/favicon.ico")%>">`
  
  Cuando trabajemos con framesworks no haremos tantas cositas así


  ---
  todo esto nos genera ununico dist/index.html
 y nosotros queremos 3. Es decir vamos a webpack.config y añadimos los html

 ```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/teams.html',
            filename: 'teams.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/contact.html',
            filename: 'contact.html'
        }),
    ]
 ```


TRUCO: si tienes errores en browser, copia la funcion error, vete al buscador y mira donde te lleva que estes usando esa funcion.


```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['home'], // añado esta linea para selecciono el bundels de output
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/teams.html',
            filename: 'teams.html',
            chunks: ['teams']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
    ]
```

// nos da la posibilidad de seleccionar cuantos bundels queramos de los que hemos seleccionado aquí

```js
    output:{
        filename: '[name].[chunkhash]bundle.js',
        path: path.resolve( __dirname ,'dist' ),
        // path.resolve( __dirname, '...' , '...', 'dist' ) podrías subir de directorios
        clean: true
    },
```

se te vas a inspeccionar el `index.html` verás que sólo tienes una linea de <script>
`<script defer src="home.f1ee7d4016f34f56b72ebundle.js"></script></head>`
antes de poner esto `chunks: ['home'], ` tenías más


Nosotros podríamos utilizar un global entry point y usarlo en todos

```js
module.exports = {
    entry: {
        global: './src/homePage.ts',
        home: './src/homePage.ts',
        teams: './src/teamsPage.ts',
        contact: './src/contactPage.ts',
    },
```
entonces este global emntry point lo podemos utilizar en todos

```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['global', 'home'], // añado esta linea para selecciono el bundels de output
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/teams.html',
            filename: 'teams.html',
            chunks: ['global','teams']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/contact.html',
            filename: 'contact.html',
            chunks: ['global','contact']
        }),
    ]
```

esto es más rápido porque unicamente tiene los recursos quenecesita.


---


Vamos a pasar 404.html y realizar todo el proceso hecho hasta aquí para esta página:
1. `./404.html` lo pasamos a `./templates/404.html`
2. eln el html todas las imagenes las hacemos variables
3. creo el `./css/_404.css` dentro está el css original
4. creo `404.css` dento de la carpeta de css
   1. habiendo importado dentro del archivo
   ```js
    @forward './partials/reset';
    @forward './partials/common';
    @forward './partials/404';
   ```
5. creo el `./src/error.ts`
   1. dentro solo hay `import './css/404.css'`
6. en `webpack.config` le hacemos la entrada, para que cargue el css

    ```js
        entry: {
        home: './src/homePage.ts',
        teams: './src/teamsPage.ts',
        contact: './src/contactPage.ts',
        notFound: './src/notFoundPage.ts',
    },
    ```
7. Le añadimos el plugin
    ```js
        new HtmlWebpackPlugin({
            template: './src/templates/404.html',
            filename: '404.html',
            chunks: ['notFound']
        }),
    ```

¿Tenemos que hacer un entry point para una página que solo hay css?
- SI, al final puede que le metas lógica, entonces pasarás por el entrypoint


---

### DevServer

Ahora falta configurar nuestro entorno. Vamos a configurar nuestros escripts de desarrollo `package.json`

```json
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch" // no hace falta instalar nada
  },
```

instalamos la dependencia

```sh
npm install -D webpack-dev-server
```

añado el scrip en `package.json`

```json
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "dev": "webpack server"
  },
```
y reinicio ` npm run dev` y vemos que nos escupe cosas diferentes

```sh
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.71:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/alex/Desktop/frontend-pro-main/public' directory
```

si abrimos `http://localhost:8080/` veremos donde estamos
A partir de ahora tu puedes is al `/tempalte` que quiera y directamente te permite modificar la plantilla html y verás los cambios reflejados directamente en web, sin preocuparte de nada más, si recompilar la aplicacion lo actualiza, ni preocuparte de los assets.

Si inspeccionas verás en consola `[HMR] Waiting for update signal from WDS...` HMR es una propiedad que permite que la palicacion actualce las partes solo que necesita.
Hot Module Replacement, te permite modificar mietras está corriendo tu aplicación, puedes leer la doc.

EN REACT ESTO (Hot Module Replacement) YA ESTÁ IMPLEMENTADO EN PRODUCCION. En un ecommerce los productos cambian cada 5 minutos es una ifo de la bbdd que genera un template, esto te permite servir html cargar informacion dinamicamente, por ejemplo una seccion de ofertas, entonces, te permite enviar al usuario la seccion o mudulo reemplazado por uno nuevo sin renderizar (ESO LO IMPLEMENTE NETS EN REACT). Next, te permite crear páginas renderizadas en el backend y luego lo enviamos al usuario.

¿Qué nos permite hacer el HMR?

tu puedes ir directamente al `_form.css` y lo que cambies se cambiará sin más en el fronted sin hacernada más. Esto es potente porque si en el formulario tiene 35 entradas y quieres cambiar el color del texto, deberías verificar cada entrada, en cambio aquí sólo tocas una cosa y se cambia.

Con el html me esta dando probelmas creo que por que hay plugins que no son compatibles, intento:

webpack.config
```js
devServer: {
    hot: true
}
```
Pero no funciona

webpack.config
```js
    devServer: {
        hot: true,
        watchFiles: ['src/**/*'] // pero me recarga la página con el cambio
    },
    resolve: {
````
lo interesante es que lo haga sin recargar la página, pero quizás si nos interesa podríamos pagar este precio a cambio de que lo puedas hacer...

...quizás más adelante si investigas como hacer encuentra una solucion para hacer exactamente lo mismo que haces para css como para html. De momento lo quito `watchFiles: ['src/**/*']`


### SASS

Es un pre-procesador de css

Es una herramienta que nos permite con una sintaxis ligeramente diferente a css acabar obteniendo css entendible por el ordenador.

Añade características dinámicas a CSS como mixin, funciones... 

Ventajas:
● Desarrollo de CSS más rápido
● Mejor mantenimiento del código 

Inconvenientes
● Hay que procesar SASS cada vez que hacemos un cambio para obtener el CSS modificado

https://www.sassmeister.com/

de `scss` to `css`

![]('./src/img/sass.png')

**Permite declarar porciones de codigo que reutilizaremos en diferentes sitios**


![]('./src/img/sass1.png')

ejemplo app real, en cascada se queda con las variable y al final retocamos las variables que queramos

![]('./src/img/sass2.png')

Operadores matemáticos y funciones

![]('src/img/sass3.png')

Clases , bloques, bucles

![]('../src/img/sass4.png')

¿para qué un bucle? hay  fremawords que lo usan bastante: fíjate en la siguiente imagen y mira los tamaños

![]('./../src/img/sass5.png')


https://www.npmjs.com/package/sass



**PASAMOS DE CSS A SCSS**

metemos todos los archivos parciales en la nueva carpeta `/partial/_archivo.scss`

1. Cambiamos las extensiones de home.css, _reset.css, _home.css, _common.css

```css
// home.css de...
@import url('./_common.css');
@import url('./_home.css');
@import url('./_reset.css');

// a ...
@import './partial/common';
@import './partial/home';
@import './partial/reset';
```

**Atención** @import ya está en desuso porque lo importa todo de manera glocal, entonces hemos de usar `@use` o `@forward`


Modifcamos archivos, _common.scss a codigo scss [mira el codigo y lo he marcado en comentarios]
POr ejemplo en _commons

```css
  .navbar {
    width: 100%;
    box-shadow: 0 1px 4px rgb(146 161 176 / 65%);
  }
  .navbar .menu-items {
    display: flex;
  }
```

```scss

  .navbar {
    width: 100%;
    box-shadow: 0 1px 4px rgb(146 161 176 / 65%);
    .menu-items {
        display: flex;
    }
  }
```

así hasta completar todo

2. npm i -D sass sass-loader
   ``webpack.config` le hemos de decir `rules` que todos los ficheros que pasen por 
```json
            {
                test: /\.s[ac]ss$/i,
                type: ['style-loader', 'css-loader', 'sass-loader'],
            }
```

para que funcines como hemos modificado el home.scsc ahora en el homePage.js hemos de cambiar

```js
import './home'
import './styles/home.scss' // esto a scss
```

npm run build

nos da errores de los ficheros de importacion css. solucion facil y rápida en vez de cambiar todo, es cambiar el nombre de todos los ficheros de `css` a `scss`

además cambiamos 

```scss
@import './common';
@import './team';
@import './reset';
```

cambio el nombre de la carpeta a `styles`

---

en `_commons.scss` tenemos estas variables dentro del archivo

```scss
// Variables SCSS
$header-font-family: 'Poltawski Nowy', serif;
$body-font-family: 'Public Sans', sans-serif;
$nav-height: 62px;
$bg-color: #f0f0f0;
$bg-color-light: #f8f8f8;
$gold-color: rgb(202, 172, 0);
```

es mejor que nos las llevemos a otro archivo nuevo de `_variables.scss` 
Em _commons.scsc añadimos el concepto de @use

```scss
@use './varibales' as var;

// y a cada varibla sustituyo por var

font-family: $body-font-family;
//por
font-family: var.$body-font-family;

```

¿qué sucede si yo quiero utilizar variables de una archivo a otro:

que debo crear una archivo nueva `/partials/_mixin.scss` y metemos las variables 

```scss
$TABLET_WIDTH: 768px;
$LAPTOP_WIDTH: 1200px;
$LARGE-WIDTH: 1440px;

@mixin tablet {
    @media (min-width: $TABLET_WIDTH ){
        @content;
    }
}
@mixin laptop {
    @media (min-width: $LAPTOP_WIDTH ){
        @content;
    }
}
@mixin large {
    @media (min-width: $LARGE-WIDTH ){
        @content;
    }
}

```

si quieres saber los breakpoints más utilizados en la actualidad te vas a boostarpc y "aviable breakpoints"


Cambiamos las formas de importar por **@forward**

---


### Weppack Merge

Ahora tenemos una regla `clean: true` es decir cada vez que generamos nuestro banner d ela palicacion , nuestro directoio de `/dist` se limpia. Cuando estamos trabajado con el servidor de desarrollo

```js
    output:{
        filename: '[name].[chunkhash]bundle.js',
        path: path.resolve( __dirname ,'dist' ),
        // path.resolve( __dirname, '...' , '...', 'dist' ) podrías subir de directorios
        clean: true
```

npm run dev : funciona bien, hacemos cualquier cambio , por ejemplo de la varibale de color... y nuestras imagenes dejan de funcionar. Esto es porque wepack utiliza por defecto el HMR por lo tando el sustituye lo que cree que es necesario.Pero entra en conflicto con el `CLEAN`

Vamos a trabajar esto dependiendo en el entron en el que estemos. 

**Varibales de entorno** : es un valor, un nombre, una variable que asignamos a nivel de sistema operativo, y que nuestra aplicación es capaz de leer. Lo utilizaremos mucho sobre todo trabajando en la parte de backend aunque en frontned tbn se utiliza que no queremos que form parte de nuestro codigo, como passport, etc todo lo que sean SECRETS

En package.json, si trabajamos con mc o linux y en scripts le digo `"build": "NODE_ENV = production webpack";`

```JS
  "scripts": {
    "build": "NODE_ENV = production webpack",
    "watch": "webpack --watch",
    "dev": "webpack server"
  },
```

le estas diciendo que primero es esta variable de entorno `production` y luego llamar a este script `webpack`. Pero el problmea es que en windows no funcionan esto!! Entonces utilizaremos :

https://www.npmjs.com/package/cross-env `cros-env` y esto funciona en cualquier sistema operativo

lo instalamos `npm i -D cross-env`

```JS
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "watch": "webpack --watch",
    "dev": "webpack server"
  },
```

esta variable de entorno `NODE_ENV` está vacío cada vez que llega allí, si la pintas en consola `echo $NODE_ENV` no tiene nada.

Vamos a `webpack.config` y comprovamos que la leee:

`console.log('Variable de entorno NODE_ENV=${process.env.NODE_ENV}');`

esto se lee desde la variable global `process` es decir desde cualquiere sitio tenemos acceso a ella; como el objeto window, ya está definido en el entorno de ejecucion, pon esto en consola `window.alert("hola alerta)`.

ejecuta `npm run build`

```sh
Variable de entorno NODE_ENV=${process.env.NODE_ENV}
```

Ahora se la enchufo a mi webpack.config, de esta forma si no es true no utilizará el clean

```js
    output:{
        filename: '[name].[chunkhash]bundle.js',
        path: path.resolve( __dirname ,'dist' ),
        clean: process.env.NODE_ENV = true
            },
    devServer: {
        hot: true,
    },
```
npm run dev

Todo esto era porque cuando modificábamos una cosa del css las imágenes dejaban de funcionar. Si purebas ahora de modificar algo desde el css, verás como si funcionan. Entonces hemos conseguido que el `clean` no se lance a no ser que estemos haciendo un `dist` de producción.
Podrías pensar que el clean lo hicimos para no acumular aquí en el dist 35 diferentes con un hash diferentes, pero tenemos que pensar que siempre que trabajamos en modo de desarrollo diferente, el  `devServer` a no ser que s elo digamos específicamente èl no genera este `dist` (sólo en memoria, funcniona pero sin carpeta dist)

**problema** DE HACERLO ASÍ ES QUE en backen se pueden acumular muchas de estas variables `NODE_ENV=production webpack` y no podemos ir concatenando variable tras variable en etsa linea `"build": "cross-env NODE_ENV=production webpack"`.
Entonces hay una librería muy conocida `dotenv` https://www.npmjs.com/package/dotenv npm que tiene los días contado porque node lo integra. Esta librería lee un fichero que crearemos y crea tantas variable de entorno como hay en el fichero.


`npm i -D dotenv`

**importante** en `.gitignore`
Por defecto `dotenv` busca el archivo env, pues antes que nada el archivo `.env` lo hemos de colocar dentro, no queremos subirlo nunca.

Después de ponerlo en git ignore, no creamos el archivo, y como buena práctica me creo un archivo de ejemplo.
`.env`
`.env.example` Este archivo es para que si un compañero continúa con la app, sepa que es lo mínimo que necesita para funcionar. **Esto es lo primero que se pide cuando comienzas a trabajar en un proyecto** las variables de entorno, la configuración del proyecto.

Ahora ya no necesitas

```js
"build": "cross-env NODE_ENV=production webpack",

lo cambiamos de nuevo por

"build": "webpack",
```

y en webpack.confid añadimos `require('dotenv').config();` si este fichero no se llamara .env pues en config que se encarga de leer le diríamos s nombre `require('dotenv').config(.enviroment);`

si te haces un build verás igual la variable en el entorno de produccion 

```sh
npm run build

> frontend-pro-main@1.0.0 build
> webpack

Variable de entorno NODE_ENV=${process.env.NODE_ENV}
```
esto es que el `clean: process.env.NODE_ENV = true` está en true.

Pero tenemos un problema, tener que ir haciendo esto en cada uno de los parámetros si es produccion o preproduccion, no es práctico:

### webpack merge

en proyecto profesionales no creamos tantos antornos webpack como entornos acabaremos teniendo y en fucnión de nuestro entorno acabaremos definiendo que condiguración tendrña nuestro webpack.

CReamos 3 archhivos copia pega `webpack.config` uno para product, otro para desarrollo y otro para cosas comunes.

**`webpack.dev`**
Ahora queremos de aquí todo aqullo que no será lo estricto de desarrollo.

Esro es transversal, lo necesitamos siempre, pues lo quito
```js 
    // entry: {
    //     home: './src/homePage.ts',
    //     teams: './src/teamsPage.ts',
    //     contact: './src/contactPage.ts',
    //     error: './src/errorPage.ts',
    // },

    output:{
        //filename: '[name].[chunkhash]bundle.js', // esto siempre estará, es comun, lo quitamos
        //path: path.resolve( __dirname ,'dist' ),  // esto siempre estará, es comun, lo quitaos
        clean: false, // esto aplicará false en desarrollo
    },

    // resolve: { 
    //     extensions: ['.tsx', '.ts', '.js'], // esto era cuando la app miraba de js a ts FUERA
    // },

    // modulos y plugons son los mismo para desarrollo y produccion , es de cir comun, FUERA

    //  module: {
    // },

    // plugins: [
    // ]
```

así ha quedado

```js
const { merge } = require('webpack-merge'); // devuelve un objeto y yo solo quiero la propiedad merge
const defaultConfig = require('./webpack.common');
// require('dotenv').config();

// console.log('Variable de entorno NODE_ENV=${process.env.NODE_ENV}');

// aquí vemos que dev devuelve objeto nuevo con la suma de "defaultConfig" + lo otro
module.exports = merge(defaultConfig, {
    mode: 'development', 
    devtool: 'inline-source-map', 
    output:{
        clean: false, // en common sobre escribirá a false
    }
});
```

**`webpack.prod`**
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require('dotenv').config();
// console.log('Variable de entorno NODE_ENV=${process.env.NODE_ENV}');

module.exports = {
    // entry: {
    //     home: './src/homePage.ts',
    //     teams: './src/teamsPage.ts',
    //     contact: './src/contactPage.ts',
    //     error: './src/errorPage.ts',
    // },
    mode: 'production', 
    devtool: 'source-map', // para inspeccinoar cosas, genera un json con los mapas de la app
    output:{
        // filename: '[name].[chunkhash]bundle.js',
        // path: path.resolve( __dirname ,'dist' ),
        clean: true
    },
    // resolve: {
    //     extensions: ['.tsx', '.ts', '.js'],
    //   },
    //   module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //         {
    //             test: /\.tsx?$/,
    //             use: 'ts-loader',
    //             exclude: /node_modules/,
    //         },
    //         {
    //             test: /\.(png|jpg|gif|webp|ico)$/i,
    //             type: 'asset/resource',
    //         },
    //         {
    //             test: /\.s[ac]ss$/i,
    //             use: ['style-loader', 'css-loader', 'sass-loader'], // Aquí fue corregido
    //         },
    //     ]
    // },
    
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         //template que buscará para compilar
    //         template: './src/templates/index.html',
    //         filename: 'index.html',
    //         chunks: ['home'], // añado esta linea para selecciono el bundels de output
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: './src/templates/teams.html',
    //         filename: 'teams.html',
    //         chunks: ['teams']
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: './src/templates/contact.html',
    //         filename: 'contact.html',
    //         chunks: ['contact']
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: './src/templates/404.html',
    //         filename: '404.html',
    //         chunks: ['error'],
    //     }),
    // ]
}
```

si cargar npm run 
verás que se queja, hay que dicrle que coje el de produccion o el de desarrollo, `packjson.json`

```json
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "watch": "webpack --watch --config webpack.dev.js",
    "dev": "webpack serve --open --config webpack.dev.js"
  },
```

esto creará ficheros js de una sola linea en dist


**`webpack.common`**

quito el `mode:` y el `clean:`
quiero `console.log('Variable de entorno NODE_ENV=${process.env.NODE_ENV}');`
quito `require('dotenv').config();`


---
A partir de ahora esto ya se parece a un proyecto profesional. Si un día viene el jefe y te dice que hay que cambiar algo, tu ya lo tienes todo separado por ficheros y es facil de mantener, esto es lo que hemos ehco, que sea facil de mantener. Hemos conseguido que si mañana en vez de 4 páginas tenga 44, es igual de fácil de mantener.

Ahora si vas a cambiar cualquier cosa por ejemplo en `styles/partials/_reset.scss`se cambiará directamente.


---

Aún tenemosun pequeño problmea. Cuando arrancas el npm run dev, y cargas la portada puedes ver esto:

![]('./src/img/error.png')

y esto quiere decir que carga stilos de css, ahora no nos damos cuenta al cargar porque es un proyecto pequeño, pero cuando sea grande puede que tarde milisegundos en cargar los estilos de la página. Entonces vamos a instalar un plugon que recoje el css que está en nuestro `entryPoint` se lo lleva y lo inyecta en el `/template/html` , esto va en produccion, entonces voy a `webpack.prod`

`npm i -D mini-css-extract-plugin`  https://webpack.js.org/plugins/mini-css-extract-plugin/


```js
const { merge } = require('webpack-merge'); 
const defaultConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(defaultConfig, {
    mode: 'production', 
    devtool: 'source-map', 
    output:{
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});
```

Y no hace nnada porque a todo aqullo que entre por el entryPoint hemos de decirle como tiene que tratarlo. Si te vas a `webpack.common`

verás

```js
    {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Aquí fue corregido
    },
```

le estas diciendo que los archivos que entran .css pasen por el `sass-loader` para convertirlos a csss, que pasen por el `css-loader` para que nuestro `entryPoint` se acaba de hacer un import de nuestro archivo css y que pase por `style-loader`; ¿Quien es el encargado de que ese archivo acave aquí? 

![]('./src/img/error.png')

el `style-loader` lo incrusta aqui. Así que vamos a cambiarle la regla en producción. 

```js
const { merge } = require('webpack-merge'); 
const defaultConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(defaultConfig, {
    mode: 'production', 
    devtool: 'source-map', 
    output:{
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 'style-loader', // esto no interesa
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});
```

Repasamos que está pasando:

1. Definimos el entrry point de home (webpack.common):
   ```js
    entry: {
        home: './src/homePage.ts',
   ```
2. Le hemos dicho que el `filename: 'index.html',` acabe en el `template: './src/templates/index.html'` cogiendo el chunk home `chunks: ['home']` 
   ```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['home'], // añado esta linea para selecciono el bundels de output
        }),
   ```
3. ese css que hablamos antes lo importamos dentro del entryPoint `home: './src/homePage.ts',` y cuando lo pasamos por el `MiniCssExtractPlugin.loader,` de **webpack.prod**  lo que hace es:
         1. Tengo un archivo que me han importado de este entryPoint `home: './src/homePage.ts',`
         2. Por lo tanto yo ya se que lo tengo que incrustar quí dentro: (porque el chunk que lo importa es este "home")
```js
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['home'], // añado esta linea para selecciono el bundels de output
        }),
```

Qué se puede mejorar? que dentro de `dist/contact.css` no ha comvertido a `contact.css`, el mismo nombre. Esto es un problmea porque si mañana estamos en producción con un sistema de caché, el `contact.css` viejo y el nuevo son el mismo. Hemos de corregirlo para añadir el hash de produccion. Esto nos lo da el mismo plugin https://webpack.js.org/plugins/mini-css-extract-plugin/

y en webpack.prod

```js
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].dundle.css', // añadimos la linea cambio de nombre
        })
    ]
});
```

Ahora podemos ver de nuevo en el head que nos ha importado con el nombre cambiado

![]('./src/img/cambio.png')


**para comprimir ficheros css**

`npm install css-minimizer-webpack-plugin --save-dev` y cambio `webpack.prod.js`

```js
    optimization: {
        minimizer: {
            new CssMinimizerPlugin(),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].dundle.css',
        })
    ]
});
```


### eslint

Paar depurar el codigo

`npm init @eslint/config`
```sh
➜  frontend-pro-main git:(main) ✗ npm init @eslint/config
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^6.4.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0  eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```
esto crea un archivo `.eslintrc.json`


### Vamos hacer lo mismo desde el inicio pero con PARCEL

https://parceljs.org/

Con 0 configuracion podemos trabajar.





