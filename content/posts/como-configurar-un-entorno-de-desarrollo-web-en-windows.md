---
title: "Como configurar un entorno de desarrollo web en windows"
description: "En este post te enseñare a como configurar un entorno de desarrollo web usando WSL (Windows Subsystem for Linux). Esta es la forma en la que yo"
meta_description: "En este post te enseñare a como configurar un entorno de desarrollo web usando WSL (Windows Subsystem for Linux). Esta es la forma en la que yo"
cover: "https://res-2.cloudinary.com/hgzzjqqrw/image/upload/q_auto/v1/ghost-blog-images/setup-windows.jpg"
date: '2024-11-10'
---

En este post te enseñare a como configurar un entorno de desarrollo web usando WSL (Windows Subsystem for Linux). Esta es la forma en la que yo tengo configurado mi entorno de desarrollo en el que puedo hacer frontend con todos los frameworks de javascript y backend con node js y python.

### **Instalar WSL (Windows Subsystem for Linux)**

Lo que te voy a mostrar a continuación está basado en la [documentación oficial de WSL](https://docs.microsoft.com/en-us/windows/wsl/). Cabe aclarar que en este post instalaré la versión 2 de WSL que tiene compatibilidad con Docker en las versiones no pro de Windows 10.

El primer paso es **habilitar las funciones de WSL**, para esto hay que ejecutar una terminal de PowerShell con permisos de administrador, y correr el siguiente comando:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

Ahora hay que habilitar la plataforma de máquina virtual. para eso hay que correr otro comando en la PowerShell:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Bien, en este momento es necesario actualizar el kernel de Linux, que lo puedes descargar dando clic [aquí](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi), cuando se descargue el archivo ejecútalo (te pedirá permisos) e instálalo.

Una vez se termine de instalar el kernel, hay que cambiar la versión de WSL, de la versión 1 a la 2, eso se logra con este otro comando:

```powershell
wsl --set-default-version 2
```

Después de cambiar la versión de WSL, queda el último paso que es instalar alguna distribución de Linux, abre la tienda de Windows y en buscador escribe Linux esto te arrojara varios resultados, puedes instalar la distribución que quieras, en este ejemplo instalare Ubuntu 20.04

![](https://res.cloudinary.com/hs8bxfui6/image/upload/v1611706138/distributions_cemvc4.png)

![](https://res.cloudinary.com/hs8bxfui6/image/upload/v1611706131/ubuntu_q5hao3.png)

Una vez que se haya instalado y lo ejecutes por primera ves, esto va tardar algunos minutos en lo que descomprime los archivos de la distribución y despues te pedirá que escribas un nombre de usuario y una contraseña, aclaro que esto es ajeno al usuario y contraseña de windows, no tiene nada que ver.

![](https://res.cloudinary.com/hs8bxfui6/image/upload/v1611706112/console_vdbnkw.png)

Bien, ya terminamos con la instalación de WSL ahora lo que sigue es configurar la consola e instalar las herramientas de desarrollo.

### **Configurar consola**

Antes de instalar cualquier cosa, es necesario actualizar los paquetes de Ubuntu.

```bash
sudo apt-get update
sudo apt-get upgrade
```

#### **Instalar zsh y ohmyzsh**

Prácticamente zsh es una terminal Shell y ohmyzsh es un fremewok que potencia esta Shell con plugins que pueden hacernos más productivos, además de que podemos instalar temas para sentirnos más agusto.

Vamos a instalar [zsh y ohmyzsh](https://github.com/ohmyzsh/ohmyzsh), también me base en la documentación oficial.

Para instalar zsh hay que correr el siguiente comando:

```bash
sudo apt install zsh
```

Y para instalar ohmyzsh hay que correr el siguiente comando:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Esto mostrara una pregunta.

```bash
Time to change your default shell to zsh:
Do you want to change your default shell to zsh? [Y/n]
```

Prácticamente dice que, si quieres hacer zsh el Shell por defecto y escribimos que sí `Y` y damos enter, esto te pedirá tu contraseña.

En resumen, ohmyzsh nos ofrece una posibilidad muy amplia de instalar plugins que nos ayuden a ser más productivos, y también instalar temas para sentirnos más agusto con la consola, puedes ver más en la [documentación oficial](https://github.com/ohmyzsh/ohmyzsh/wiki).

#### **Instalar fzf**

Esto es un buscador general, con la que podemos filtrar cualquier tipo de lista; archivos, historial de comandos, procesos, nombres de host, marcadores, git commits, etc.

Para instalarlo es muy fácil solamente hay que correr otro comando:

```bash
sudo apt-get install fzf
```

Ejemplo de donde suelo utilizarlo.

```bash
cd ~ls -a | fzf
```

#### **Instalar git**

Git es un software de control de versiones diseñado por Linus Torvalds. De forma resumida nos permite llevar un control en los cambios que realizamos a nuestros proyectos.

Para instalarlo hay que correr.

```bash
sudo apt-get install git
```

### **Instalar las herramientas de desarrollo**

#### **Node JS**

Para poder instalar node js lo vamos a hacer con un administrador de versiones [(node version manager)](https://github.com/nvm-sh/nvm)

Para instalar nvm hay que correr:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Ahora hay que agregar una pequeña configuración para eso hay que editar el archivo `~/.zshrc`, puede ser con vim, nano o visual studio code. Y al final del archivo agregar lo siguiente.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Después de guardar, cerramos la terminal y abrimos una terminal nueva, para asegurarnos que nvm está instalado de forma correcta hay que correr el siguiente comando.

```bash
nvm --version
```

Esto debería mostrar la versión de nvm, en mi caso muestra `0.37.2`.

Ahora si podemos continuar con la instalación de node, el siguiente comando instalara la última versión.

```bash
nvm install node
```

Si quieres otra versión solo hay que especificarla.

```bash
nvm install 14.15.4
```

De este modo puedes tener diferentes versiones de node y usar la que más te convenga o necesites.

Para enlistar las versiones de node que has instalado puedes correr:

```bash
nvm ls
```

Por último si quieres cambiar entre versiones instaladas vasta con correr otro comando al que le especificas la versión que quieres usar.

```bash
nvm use 14.15.4
```

Si quieres más información puedes recurrir a la [documentación oficial](https://github.com/nvm-sh/nvm), ya que nvm tiene muchas más características que estoy dejando fuera de este post.

### **Conclusión**

Estas son las herramientas más básicas que yo utilizo todos los días para hacer desarrollo frontend y backend, ahora puedes usar frameworks como React Angular o Vue, o frameworks backend como Express o NestJS. Cabe aclarar que aún hay configuraciones más avanzadas a las que le tendría que dedicar un post entero.
