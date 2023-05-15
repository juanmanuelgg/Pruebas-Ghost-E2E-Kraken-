const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, folders, options } = config;

async function executeTest(){  
      
    const Ghost3 = config.urlIni;
    const Ghost4 = config.urlCom;  
    
    leerDirectorios(Ghost3, Ghost4);

    function leerDirectorios(Ghost3, Ghost4) {
        const promesas = [
          leerDirectorio(Ghost3),
          leerDirectorio(Ghost4)
        ];
      
        Promise.all(promesas)
          .then(resultados => {
            const contenidoDir3 = resultados[0];
            const contenidoDir4 = resultados[1];     
            console.log(contenidoDir4);
            for(let f = 0; f<10; f++){
                const promesas = [
                    leerDirectorio(`./screenshot/GHOST-3-41-1/${contenidoDir3[f]}`),
                    leerDirectorio(`./screenshot/GHOST-4-44-0/${contenidoDir4[f]}`)
                ];
                Promise.all(promesas)
                .then(subresult => {
                    const G3 = subresult[0];
                    const G4 = subresult[1];                   
                    let resultInfo = {}                    
                    for(b of G4){   
                         
                        console.log(`${Ghost4}/${contenidoDir3[f]}/${b}`);

                        const data =  await compareImages(
                            fs.readFile(`${Ghost3}/${contenidoDir3[f]}/${b}`),
                            fs.readFile(`${Ghost4}/${contenidoDir4[f]}/${b}`),
                            options              
                        );                        
                        
                        resultInfo[b] = {
                            isSameDimensions: data.isSameDimensions,
                            dimensionDifference: data.dimensionDifference,
                            rawMisMatchPercentage: data.rawMisMatchPercentage,
                            misMatchPercentage: data.misMatchPercentage,
                            diffBounds: data.diffBounds,
                            analysisTime: data.analysisTime
                        }

                        const folde = "./screenshots/campare/" ;                   
                        if (!fs.existsSync(folde)){
                            fs.mkdir(folde, { recursive: true });
                        } 
                        fs.writeFileSync(`./campare/compare-${G3[b]}.png`, data.getBuffer());
                
                    } 

                    let datetime = new Date().toISOString().replace(/:/g,'');  
                    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
                    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);                    
                
                    console.log('------------------------------------------------------------------------------------')
                    console.log("Execution finished. Check the report under the results folder")
                    return resultInfo;  
                })
                
            }            
            
          })
          .catch(error => {
            console.error('Error al leer los directorios:', error);
          });
      }      
      
}
(async ()=>console.log(await executeTest()))();
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


function browser(b, info){
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
  </div>`
}

function createReport(datetime, resInfo){
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
                ${config.browsers.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}
