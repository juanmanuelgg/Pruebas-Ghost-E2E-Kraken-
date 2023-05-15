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

´´´bash
npm install
npm test
´´´

# Video

Link:

# Integrantes:

- Luz Stella Ochoa Marin (ls.ochoa@uniandes.edu.co)
- Juan Manuel González Garzón (jm.gonzalez1844@uniandes.edu.co)
