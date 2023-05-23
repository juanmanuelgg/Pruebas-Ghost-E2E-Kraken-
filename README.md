# Pruebas-Ghost-E2E-Kraken-

## En este repositorio están los 20 escenarios y pruebas creadas con la herramienta kraken para la aplicación bajo pruebas ghost

# Requisitos:

- Cypress
- Node
- Ghost 3.41.1 y 4.44.0
- Tener un usuario registrado en el aplicativo ghost

# Pasos para correr los escenarios de pruebas:

- Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Kraken-.git
- Ejecutar **npm install kraken-node -g**, esto instalara dos librerias necesarias para correr los escenarios con kraken.
- Ejecutar **npm install kraken-node**
- Ejecutar **npm install -g appium**
- Revisar la version de cucumber que utiliza kraken(7.2.1)
  y ejecutar **npm install -g @cucumber/cucumber@7.2.1** y **npm install @cucumber/cucumber@7.2.1**
- Moficar las variables del archivo **properties.json** de acuerdo a su entorno y preferencia, pero como requitos: **USERNAME1**, **PASSWORD1**, **USERNAME2**, **PASSWORD2**, **URL**, **POST** , **EDITORPOST** en estas 3 ultimas es muy importante el puerto donde estes corriendo GHOST.
- Para ejecutar cada escenario, se debe llevar uno a uno de la carpeta **/all_features** a la carpéta **/features** y regresarlo a medida que lo haya ejecutado.
- Ejecutar el comando **npx kraken-node run**, esto ejecutar el escenario correspondiente.

## IMPLEMENTACIÓN SEMANA 6

Las pruebas se realizadoron bajo Kraken y para las Regresión Visual se utilizó la herramienta de resemble.

# Requisitos

- La semana 5 trabajamos con la versión 3.41.1 y esta semana para las pruebas de regresión Visual la versión 4.44.0
- Se requirio de hacer ajustes de los Page Object para la versión 4.44.0 para varios steps.
- Se ajsutó el hook.js para que permitiera la captura de las himagenes de forma dinámica.
- En la carpeta **/screenshot** las carpetas de cada una de las versiones y dentro de estas las carpetas por escenarios con sus respectivos screenshot de los diferentes pasos.

# Las 10 funcionalidades de GHOST que se trabajan en esta semana 6 son:

- func4_esc1 (Crear Post)
- func4_esc2 (Ver Primer Post de la lista)
- func4_esc3 (Editar Primer Post de la lista)
- func4.esc4 (Filtrar Post Publicados)
- func4.esc5 (Publicar Primer Post)
- func4.esc6 (Despublicar primer Post de la lista)
- func5.esc1 (Editar Full Name Perfil)
- func5.esc2 (Verificar Edición de Full Name)
- func5.esc3 (Cambiar Contraseña)
- func5.esc4 (Verificar cambio contraseña)

# Instrucciones para ejecutar las pruebas de regresión visual

```bash
npm install
npm test
```

# Actividad Semana 7

## Requisitos

- instalar **npm install csv-parser**
- instalas **npm install axios**
- Se trabaja con la versión 4.44.0 de Ghost
- Para ejacutar cada escenario se debe arrastrar a la carpeta **features**

# Las carpetas estan divididas segun la estrategia de generación de datos(Se utilizaron las 3 estrategías):

## all_feature/aleatorio-faker : En esta carpeta se encuentran los escenarios que se le aplicacan la estrategia aleatoria con la libreria de faker:

- login.feature (Escenario que permite realizar login con email y contraseña incorrecta)
- createPost.featur (Escenario para Crear Post con título y detalle aleatorio)
- editarPerfil (Escenario Edita el perfil del usuario con data aleatoria)
- etitarPost-1 (Escenario Editar Post con título de 500 caractres): no lo guardó, pero no mostró alerta.
- editarPerfil-2 (Escenario para Editar nombre de perfil con un solo caracter de longitud(1).)
- CabiarPass (Escenario para cambio de contraseña con 1 caracter de longitud) - Pasó la prueba
- CabiarPass-1 (Escenario para cambio de contraseña con 10 caracteres y solo alfabeto)
- createTag (Escenario para crear tag con el limite de 1 en el campo descripcion)
- createTag-1 (Escenario para crear tag con el límite 500 en el campo descripcion)
- createTag-2 (Escenario para crear tag con el límite 501 en el campo descripcion)
- crear-Tag_sin_nombre (Escenario para crear tag sin nombre)
- login-noPass (Escenario para hacer login con password incorrecto)
- editarEmailPerfil (Escenario para modificar el email del perfil)- Ghost lo permite. grave error.
- createPage (Escenario para crear paginas con título y detalle d elongitud normal)
- createPage-1 (Escenario para crear página con más de 500 caracteres)
- createMember (Escenario para crear miembro sin etiqueta)

## all_feature/mockaroo : En esta carpeta se encuentran los escenarios que se utiliza la estrategía con API de Mockaroo:

- createPost (Crea Post utilizando API de Mockaroo)

## all_feature/mockara-priori : En esta carpeta se encuentran los escenarios que utilizan la estrategia de a-priori utilizando us csv de Mockaroo y con escenarios outline:

- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar email y password correstos
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar ambos incorrectos
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar el email correcto y password incorrecto
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar emil incorrecto y password incorrecto
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar emil vacio y passwor incorrecto
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar emil incorrecto y password vacio
- login (Escenario que consume un csv de Mockarro, cada vez que se ejecuta toma un valor aleatorio del scv) puede tomar emil formato incorrecto y password vacio

## all_feature/escenarios-aleatorios : En esta carpeta se encuentran los escenarios que utilizan la estrategia de escenarios aleatorios. Estos realizan una accion aleatoria cada que se ejecutan:

- navegacion (Escenario que permite navegar entre las paginas Post, Page, tags y members de forma aleatoria cada vez ue ejecutas el escenario)

# Incidencias semana 7 (Ver la wiki)

https://github.com/juanmanuelgg/Pruebas-Ghost-E2E-Kraken-/wiki/Incidencias-Semana-7

# Trabajo con herramienta cypress en el siguiente link:

- Cypress: https://github.com/juanmanuelgg/Pruebas-Ghost-E2E-Cypress

# Integrantes:

- Luz Stella Ochoa Marin (ls.ochoa@uniandes.edu.co)
- Juan Manuel González Garzón (jm.gonzalez1844@uniandes.edu.co)
