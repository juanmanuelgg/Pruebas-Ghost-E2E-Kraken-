const { After, Before, AfterStep, BeforeStep, BeforeAll } = require('@cucumber/cucumber');
const { WebClient, Device } = require('kraken-node');

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function(Scenario){
  const fs = require('fs');
  const folderPath = "./reports/screenshot/"+Scenario.pickle.name.replace(/\s/g,'');
  
  if (!fs.existsSync(folderPath)){
    fs.mkdir(folderPath, { recursive: true }, (error) => {
      if (error) {
        console.error('Error al crear el directorio:', error);
      } else {
        console.log('Directorio creado exitosamente');
      }
    });  
  }  
  await this.driver.saveScreenshot("./reports/screenshot/"+Scenario.pickle.name.replace(/\s/g,'')+ "/Paso_"+ counter + ".png");

});

BeforeStep(async function(Scenario){
  counter++;
});

BeforeAll(async function(){
  counter=0;
});