---
title: "Como implementar una lista enlazada en JavaScript"
description: "Una lista enlazada es una estructura de datos muy similar a un arreglo, pero con diferencias. Un arreglo guarda todos los elementos en un mismo"
meta_description: "Una lista enlazada es una estructura de datos muy similar a un arreglo, pero con diferencias. Un arreglo guarda todos los elementos en un mismo"
cover: "https://res-3.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/linked-list.jpg"
date: '2024-11-10'
---

## **¿Que es una lista enlazada?**

Una lista enlazada es una estructura de datos muy similar a un arreglo, pero con diferencias. Un arreglo guarda todos los elementos en un mismo espacio de memoria. En cambio, una lista enlazada guarda los elementos en diferentes espacios de memoria y los elementos son referenciados por un puntero.

Cada elemento también conocido como nodo contiene dos propiedades:

*   **data**: contiene los datos que guardara el nodo y que pueden ser de cualquier tipo.
*   **next**: es un puntero que guarda la referencia a un siguiente nodo. en caso de no existir un nodo siguiente, el valor será null;

![](https://res.cloudinary.com/hs8bxfui6/image/upload/v1606253711/node_whvlqh.svg)

El punto de entrada a una lista enlazada se le conoce como cabeza (head) y es una referencia al primer nodo de la lista mientras el ultimo nodo de la lista apunta a null

![lista enlazada](https://res.cloudinary.com/hs8bxfui6/image/upload/v1606253711/list_wilian.svg)

## **Tipos de listas enlazadas**

Existen 4 tipos de listas enlazadas

*   **Lista enlazada simple** donde cada nodo contiene solo un puntero al siguiente nodo.
*   **Lista doblemente enlazada** donde cada nodo contiene dos punteros, un puntero al siguiente nodo y un puntero al nodo anterior.
*   **Lista circular** donde el ultimo nodo de la lista apunta al primer nodo de la lista.
*   **Lista circular doblemente enlazada** donde cada nodo contiene dos punteros, un puntero al siguiente nodo y un puntero al nodo anterior, el ultimo nodo de la lista apunta al primer nodo de la lista y el primer nodo de la lista apunta al último, formando así un bucle.

Ahora vamos a crear nuestra implementación de una lista enlazada simple.

### **Nodo (Node)**

Crearemos una clase con la que podemos crear nuevos nodos

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

### **Lista enlazada (LinkedList)**

Crearemos una clase que por el momento solo tiene el head en null, a esta clase le implementaremos algunos métodos para poder realizar acciones como añadir un nuevo nodo e imprimir la lista en consola.

```js
class LinkedList {
  constructor () {
    this.head = null;
  }
}
```

El primer método es `add` que recibirá dos parámetros la data y una posición, este último parámetro es opcional y si no se pasa, por default agregara el nodo al final de la lista.

```js
add(data, position = false) {
  const node = new Node(data);
  if (this.head === null) {
    // Si la lista esta vacía agregamos el primer nodo al head
    this.head = node;
  } else if (position === false) {
    // Si la posición es false agregamos el nodo hasta el final de la lista
    this._addLast(node);
  } else if (position === 0) {
    // Si la posición es 0 agregamos el nodo al inicio de la lista
    this._addFirst(node);
  } else {
    // Agregamos el nodo en la posición indicada
    this._add(node, position - 1);
  }
}
```

##### **Ahora pasaremos a implementar los métodos privados**

En el primer método creamos una nueva referencia `tail` que apunta al contenido del head, sobre esta referencia iteraremos en un bucle while para llegar al final de la lista y agregar el nodo.

```js
_addLast(node) {
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = node;
}
```

En el segundo método creamos una nueva referencia `tail` que apunta al contenido del head, después hacemos que el head apunte al nuevo nodo y como último paso hacemos que el puntero de ese nodo apunte al resto de la lista que se guardó en `tail`.

```js
_addFirst(node) {
  const tail = this.head;
  this.head = node;
  this.head.next = tail;
}
```

En el ultimo método privado creamos una nueva referencia `tail` que apunta al contenido del head, sobre esta referencia iteraremos en un bucle for hasta el número que la posición indique, ahora hacemos que el nuevo nodo apunte al contenido del puntero del nodo que contiene tail y después hacemos que ese puntero apunte a nuestro nuevo nodo.

```js
_add(node, position) {
  let tail = this.head;
  for(let i = 0; i < position; i++) {
    tail = tail.next;
  }
  node.next = tail.next;
  tail.next = node;
}
```

Por último, implementaremos un método para imprimir nuestra lista enlazada. Creamos una nueva referencia `tail` que apunta al contenido del head, sobre esta referencia iteraremos en un bucle while, y una variable `str` que es un Sting vacío, en cada iteración anexaremos el valor del nodo y al final haremos un console.log de la variable `str`

```js
log() {
  let tail = this.head;
  let str = '';
  while(tail != null) {
    str += `${tail.data} -> `;
    tail = tail.next;
  }
  console.log(str + 'null');
}
```

Ahora probaremos nuestra Lista enlazada

```js
list = new LinkedList();

list.add('Nuevo Nodo');
list.add('Hasta atrás');
list.add('Otro nodo atrás');
list.add('Nodo al principio', 0);list.add('Inicio', 0);
list.add('Posición 2', 1);
list.add('Posición 5', 4);
list.log();
```

Al ejecutar esto el output en consola deberá dar este resultado.

```js
Inicio -> Posición 2 -> Nodo al principio -> Nuevo Nodo -> Posición 5 -> Hasta atrás -> Otro nodo atrás -> null
```

Y eso sería todo, en este post aprendiste a como implementar una lista enlazada simple, en futuros posts veremos cómo implementar los otros tipos de listas enlazadas.
