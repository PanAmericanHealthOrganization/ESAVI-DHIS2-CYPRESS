require('dotenv').config()
import { defineConfig } from "cypress";

const options = {
  modifyObstructiveCode: true,
  projectId: "zxph62",
  e2e: {
    baseUrl: `https://dev.paho-dhis2.org/`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    taskTimeout: 2000,
  },
}


export default defineConfig(options);
