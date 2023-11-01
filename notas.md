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






