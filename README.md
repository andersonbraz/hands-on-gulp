# Hands-on  With Gulp

Hands-on with Gulp - Gulp é um kit de ferramentas Javascript.

[EXAMPLE]("https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js")

## Step 01

Criando o diretório do seu projeto.

```shell
mkdir hands-on-gulp
```

## Step 02

Iniciando o seu projeto Node.js

```shell
npm init -y
```

## Step 03

Instalando as dependências de desenvolvimento.

```shell
npm install gulp --save-dev
npm install gulp-war --save-dev
```

## Step 04

Iniciando o arquivo gulpfile.js

```javascript
const gulp = require('gulp');

function dev(cb){
    gulp.task('dev', function(){
        console.log("Development mode ...");
    });
    cb();
}


function prod(cb){
    gulp.task('prod', function(){
        console.log("Prodution mode ...");
    });
    cb();
}

exports.default = gulp.series(dev, prod);
```

## Testing - Step 04

```shell
gulp
```
