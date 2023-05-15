const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const path = require("path");

const { viewportHeight, viewportWidth, folders, options } = config;

async function executeTest() {
  const Ghost3 = config.urlIni;
  const Ghost4 = config.urlCom;

  await leerDirectorios(Ghost3, Ghost4);
}

(async () => console.log(await executeTest()))();

async function leerDirectorios(Ghost3, Ghost4) {
  const promesas = [leerDirectorio(Ghost3), leerDirectorio(Ghost4)];

  try {
    const resultados = await Promise.all(promesas);
    const contenidoDir3 = resultados[0];
    const contenidoDir4 = resultados[1];
    for (let f = 0; f < 10; f++) {
      const promesas = [
        leerDirectorio(`./screenshots/GHOST-3-41-1/${contenidoDir3[f]}`),
        leerDirectorio(`./screenshots/GHOST-4-44-0/${contenidoDir4[f]}`),
      ];
      const subresult = await Promise.all(promesas);
      const G3 = subresult[0];
      const G4 = subresult[1];
      let resultInfo = {};
      for (b of G4) {
        console.log(`${Ghost3}/${contenidoDir3[f]}/${b}`);
        console.log(`${Ghost4}/${contenidoDir4[f]}/${b}`);
        const data = await compareImages(
          `${Ghost3}/${contenidoDir3[f]}/${b}`,
          `${Ghost4}/${contenidoDir4[f]}/${b}`,
          options
        );

        resultInfo[b] = {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: data.dimensionDifference,
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: data.diffBounds,
          analysisTime: data.analysisTime,
        };

        const folder = "./screenshots/compare/";
        if (!fs.existsSync(folder)) {
          fs.mkdir(folder, { recursive: true }, (err) => {
            if (err) throw err;
          });
        }

        fs.writeFileSync(
          `./screenshots/compare/compare-${G3[b]}.png`,
          data.getBuffer()
        );
      }

      let datetime = new Date().toISOString().replace(/:/g, "");
      fs.writeFileSync(
        `../docs/${datetime}/report.html`,
        createReport(datetime, resultInfo)
      );
      fs.copyFileSync("./index.css", `../docs/${datetime}/index.css`);

      console.log(
        "------------------------------------------------------------------------------------"
      );
      console.log(
        "Execution finished. Check the report under the results folder"
      );
      return resultInfo;
    }
  } catch (error) {
    console.error("Error al procesar las comparaciones:", error);
  }
}

function leerDirectorio(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (error, archivos) => {
      if (error) {
        reject(error);
      } else {
        resolve(archivos);
      }
    });
  });
}

function browser(b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.urlIni}"> ${config.urlIni}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map((b) => browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`;
}
