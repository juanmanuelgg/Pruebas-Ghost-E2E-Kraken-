# Pruebas-Ghost-E2E-Kraken-
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta kraken para la aplicación bajo pruebas ghost</p>

<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>
<h2>Pasos para correr los escenarios de pruebas:</h2>
<ul>
<li>Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Kraken-.git</li>
<li>Ejecutar <b>npm install kraken-node -g</b>, esto instalara dos librerias necesarias para correr los escenarios con kraken.</li>
<li>Ejecutar <b>npm install kraken-node</b> .</li>

<li>Ejecutar <b>npm install -g appium</b> .</li>

<li>Revisar la version de cucumber que utiliza kraken(7.2.1) 
 y ejecutar <b>npm install -g @cucumber/cucumber@7.2.1</b> y
 <b> npm install @cucumber/cucumber@7.2.1</b>
 </li>

 <li>Arrastrar una funcionalidad .feature de la carpeta <b>/all_features</b> a la carpeta <b>/features</b>
 </li>

  <li>Ejecutar el comando<b>npx kraken-node run</b> , esto ejecutar el escenario correspondiente.
 </li>
 </ul>