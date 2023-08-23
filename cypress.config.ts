require('dotenv').config()
import { defineConfig } from "cypress";

const options = {
  modifyObstructiveCode: true,
  projectId: "zxph62",// sirve para generar el informe
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const version = config.env.VERSION || 'local'

      const urls = {
        local: "http://localhost:3000",
        dev: "https://dev.paho-dhis2.org/",
        dev238: "https://paho-dhis2.org/",
        test38: "https://paho-dhis2.org/",
      }

      // choosing version from urls object
      config.baseUrl = urls[version]

      return config


    },
    experimentalSessionAndOrigin: true,
    retries: {
      runMode: 2, // numero de veces que se intenta la prueba
      openMode: 0, // TODO: revisar
    },
    taskTimeout: 2000,
  },
}


export default defineConfig(options);
