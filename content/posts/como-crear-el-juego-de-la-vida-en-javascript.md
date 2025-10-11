---
title: "Como crear el juego de la vida en JavaScript"
description: "El juego de la vida es un autómata celular diseñado por John Conway.\nPero!!! ¿Qué es un autómata celular? Realmente no hay una definición oficial"
meta_description: "El juego de la vida es un autómata celular diseñado por John Conway.\nPero!!! ¿Qué es un autómata celular? Realmente no hay una definición oficial"
cover: "https://res-4.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/life-game-js.jpg"
date: '2024-11-10'
---

El juego de la vida es un [autómata celular](https://es.wikipedia.org/wiki/Aut%C3%B3mata_celular) diseñado por [John Conway](https://es.wikipedia.org/wiki/John_Horton_Conway).

Pero!!! ¿Qué es un autómata celular? Realmente no hay una definición oficial. pero se podria decir que es un sistema que evoluciona con el paso del tiempo asi como la vida.

Pero lo que realmente nos importa es programarlo, así que vamos a darle.

Para construir el juego de la vida necesitaremos tablero que contenga un numero `n` de casillas, y pueden ser tantas como queramos., Las casillas deben estar vivas o muertas y siguen 3 simples reglas:

*   Si una casilla tiene menos de 2 vecinos, ó más de 3 vecinos vivos, la casilla muere.
*   Si tiene exactamente 2 o 3 vecinos vivos se queda igual.
*   Si la casilla esta muerta y tiene exactamente 3 vecinos vivos, esta revive.

Con esta introducción ya podemos hacer código.

Primero creamos una carpeta y dentro crearemos 4 archivos.

*   index.html
*   main.js
*   box.js
*   board.js

En el `index.html` creamos una estructura básica de html, y dentro del body agregamos un canvas con un id único, y luego mandamos a llamar a nuestros archivos JavaScript.

```
<!DOCTYPE html>
<html lang="es">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cellular Automate</title>
  </head>

  <body>    
    <canvas id="life-game"></canvas>

    <script src="./box.js"></script>
    <script src="./board.js"></script>
    <script src="./main.js"></script>
  </body>

</html>
```

Pasamos a nuestro archivo `box.js` creamos una clase llamada `Box` que en su método constructor recibe una posición en `x` y en `y`, como también un `state`. Dentro del constructor inicalizamos sus propiedades, y hacemos `bind` de 3 métodos `addNeighbors` `newCycle` `mutation`. Esto es para que el contexto de los métodos no cambie.

```js
class Box {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.nextState = this.state;
    this.neighbors = [];

    this.addNeighbors = this.addNeighbors.bind(this);
    this.newCycle = this.newCycle.bind(this);
    this.mutation = this.mutation.bind(this);
   }
}
```

*   `this.x` es la posición que ocupara en el eje x del tablero.
*   `this.y` es la posición que ocupara en el eje y del tablero.
*   `this.state` es el estado de nuestra casilla(Box) que puede estar viva(1) o muerta(0).
*   `this.nextState` es el siguiente estado que nuestra casilla tendera.
*   `this.neighbors` son referencias a los vecinos que rodean la casilla.

Creamos el método `addNeighbors` que agregara las referencias de las casillas vecinas a la propiedad `this.neighbors`. este método recibe 3 parámetros.

*   `board` es el tablero al que pertenece.
*   `rows` el numero de filas del tablero.
*   `columns` el numero de columnas del tablero.

```js
addNeighbors(board, rows, columns) {
  let neighborX;
  let neighborY;

  for (let y = -1; y < 2; y++) {
    for (let x = -1; x < 2; x++) {
      neighborY = (this.y + y + columns) % columns;       
      neighborX = (this.x + x + rows) % rows;

      if (y !== 0 || x !== 0) {
        this.neighbors.push(board[neighborY][neighborX]);
      }  
    }   
  }
}
```

Creamos el método `newCycle` que calculara el siguiente estado de la casilla, aplicando la reglas de Conway.

```js
newCycle() {
  let neighbors = 0; 
  for(let i = 0; i < this.neighbors.length; i++) {      
    neighbors += this.neighbors[i].state;
  }

  // MUERTE: tiene menos de 2 o más de 3
  if(neighbors < 2 || neighbors > 3) {
    this.nextState = 0;
  }

  // VIDA/REPRODUCCIÓN: tiene exactamente 3 vecinos    
  if(neighbors == 3) {
    this.nextState = 1;
  }
}
```

Por ultimo creamos el método `mutation` que se encarga de aplicar el estado siguiente, al estado actual.

```js
mutation() {    
  this.state = this.nextState;
}
```

Ahora vamos al archivo `board.js` donde crearemos la función `Board` que se encargara de crear el tablero, y agregar la referencia de las casillas vecinas a la casilla actual. Esta función recibe 3 parámetros:

*   `rows` numero de filas.
*   `columns` numero de columnas
*   `initialState` un estado inicial que debe ser una matriz con valores de 0 o 1.

```js
function Board(rows, columns, initialState) {
  let board = new Array(rows);

  for (let y = 0; y < columns; y++) {
    board[y] = new Array(columns);

      for (let x = 0; x < columns; x++) {

        try {
          if(initialState[y][x] === 1) {
            board[y][x] = new Box(x, y, 1);
          } else {
            board[y][x] = new Box(x, y, 0);
          }
        }
        catch (error) {
          board[y][x] = new Box(x, y, 0);
        }
      }
  }

  for (let y = 0; y < columns; y++) {
    for (let x = 0; x < rows; x++) {
      board[y][x].addNeighbors(board, rows, columns);
    }
  }

  return board;
};
```

Ahora pasaremos al ultimo archivo `main.js` y creamos la función `startGame` dentro inicializamos las variables que el juego necesita. Esta función recibe un canvas donde se dibujara el juego.

*   `canvas` es la referencia al elemento canvas del html.

```js
function startGame(canvas) {
  const ctx = canvas.getContext('2d');

  const fps = 10;

  const columns = 50;
  const rows = 50; 

  const canvasX = 500;
  const canvasY = 500; 
  canvas.width = canvasX;
  canvas.height = canvasY;

  const sizeCellX = canvasX / rows;
  const sizeCellY = canvasY / columns;

  const initialState = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  const board = new Board(rows, columns, initialState);

  setInterval(() => {      
    // Limpiar canvas      
    canvas.width = canvas.width;
    canvas.height = canvas.height;        

    // Pinta estado actual      
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if(board[y][x].state === 1) { 
          ctx.fillStyle = '#fff';
        } else {
          ctx.fillStyle = '#000 '; 
        } 
        ctx.fillRect(y * sizeCellY, x * sizeCellX, sizeCellY, sizeCellX,);
      }
    }            

    // Calcula siguiente estado
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        board[y][x].newCycle();       
      }      
    }

    // Aplica siguiente estado
    for (let y = 0; y < rows; y++) { 
      for (let x = 0; x < columns; x++) {
        board[y][x].mutation();
      }
    }
  }, fps / 1000);
}
```

*   `ctx` es el contexto en 2d donde pintaremos el juego
*   `fps` son las veces que el tablero se pintara en pantalla
*   `rows` numero de filas
*   `columns` numero de columnas
*   `canvasX` tamaño del canvas a lo ancho
*   `canvasY` tamaño del canvas a lo alto
*   `sizeCellX` tamaño de cualquier casilla a lo ancho
*   `sizeCellY` tamaño de cualquier casilla a lo alto
*   `initialState` un estado inicial para nuestro tablero
*   `board` creamos el tablero

Después de definir la función `startGame` solo queda obtener la referencia del canvas y ejecutar la función `startGame` y pasarle el canvas como parámetro.

```js
const canvas = document.getElementById('life-game');
startGame(canvas);
```

y listo nos aseguramos de haber guardado todos los archivos bien y abrimos el archivo `index.html` en un navegador.

También puedes ver el repositorio donde se encuentra el código fuente [click aqui](https://github.com/FranciscoGustavo/game-of-the-life)
