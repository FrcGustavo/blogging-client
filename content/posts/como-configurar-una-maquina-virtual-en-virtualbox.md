---
title: "Cómo configurar una maquina virtual en VirtualBox"
description: "Esta configuración es para enfocada en poder instalar alguna distribución de Linux.\nLo primero es tener instalado VirtualBox, si aún no lo tienes"
meta_description: "Esta configuración es para enfocada en poder instalar alguna distribución de Linux.\nLo primero es tener instalado VirtualBox, si aún no lo tienes"
cover: "https://images.unsplash.com/photo-1494083306499-e22e4a457632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEzNnx8VmlydHVhbCUyME1hY2hpbmV8ZW58MHx8fHwxNjQ5ODA5NzQ3&ixlib=rb-1.2.1&q=80&w=2000"
date: '2024-11-10'
---

En este post veras como configurar una máquina virtual usando VirtualBox, esta configuración es para enfocada en poder instalar alguna distribución de Linux.

Lo primero es tener instalado VirtualBox, si aún no lo tienes te dejo un link que te ayudara a instalarlo.

Ahora sí., Una vez hayas abierto VirtualBox te aparecerá una ventana, das clic en Nuevo y te aparecerá otra ventana más pequeña, ahí te pedirá que escribas un nombre y selecciones la versión esto hace referencia a que distribución o sistema operativo vas a instalar, en este caso usare de ejemplo Debian y luego clic en siguiente.

![](https://res-4.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-1.png)

Ahora tienes que asignar la RAM que quieres que la máquina virtual tenga esto es relativo a la memoria que tenga tu computadora, En mi caso mi computadora tiene 16G y en este ejemplo le puse 4G, también ten en cuenta cuanta memoria requiere la distribución que vas a instalar como ejemplo Debian pide mínimo 2G

![](https://res-2.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-2.png)

Das clic en siguiente y deja marcada la opción de crear disco duro virtual y clic en siguiente

![](https://res-2.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-3.png)

En este paso deja la primera opción marcada

![](https://res-3.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-4.png)

Aquí nos pedirá si queremos que el disco virtual que va a usar la maquina sea de un tamaño fijo o relativo yo márquela opción de tamaño fijo

![](https://res-4.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-5.png)

Ahora le asignare 15G tú puedes asignarle lo que creas conveniente para lo que tienes pensado hacer

![](https://res-2.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-6.png)

Y das clic en crear

Con esto ya creamos la máquina virtual pero ahora realizare unas configuraciones

Selecciona la maquina y da clic en configuración

Ve a la parte de sistema y en la pestaña de procesador yo le asignare 4 cups, mi computadora es de 6 núcleos 12 hilos en este caso le estaría asignando 2 núcleos 4 hilos, tu ponle lo que tu computadora te permita y creas conveniente

![](https://res-1.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-7.png)

Ahora ve en almacenamiento, da clic en el disco que dice vacío y luego en el disco azul que aparece a la derecha y seleccionas la imagen iso que deseas utilizar para instalar la distribución que quieras, esto es para que cuando inicies la máquina virtual cargue la imagen iso como si fuera un disco y puedas iniciar con la instalación de la distribución que elegiste

![](https://res-2.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/virtual-box-step-8.png)

Das clic en aceptar

Y listo con esto ya tienes la configuración necesaria de la máquina virtual y puedes iniciarla y comenzar a instalar el sistema operativo que prefieras.
