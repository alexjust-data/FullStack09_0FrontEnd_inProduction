Me creo un proyecto npm porque voy a crear dependencias

```sh
npm init -y
```

Trabajaremos con `webPack` :

> webpack es una herramienta de construcción de paquetes (o "bundler" en inglés) muy popular en el desarrollo web moderno. Su principal función es tomar el código fuente y los recursos de una aplicación (como JavaScript, CSS, imágenes, fuentes, etc.) y transformarlos y empaquetarlos de manera que sean más eficientes y fáciles de usar en un entorno de producción web.

Instalo TypesScript

```sh
npm i -D typescript


  "devDependencies": {
    "typescript": "^5.2.2"
  }
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




CDN : cdnjs.com
