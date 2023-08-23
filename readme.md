# Cypress

El proyecto [https://www.cypress.io/](https://www.cypress.io/) permite crear automatizaciones de entornos web, esta basado en javascript

# Instrucciones de instalacción

### Instalar node js

Se recomienda instalar nodejs utilizando NMV como gestor de instaciones de node.js, las instrucciones de instalación se las puede seguir desde la pagina oficial [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

instalación de dependencias

```sh
# ubicarse en el directorio del proyecto clonado
cd dhis2-test-fun

# instalar las dependencias
npm install
```

### Despliegue

Para el despligue es necesario crear el archvo `cypress.config.ts`

```json
{
    "baseUrl": "http://localhost:8080/",
    "users": [
        {
            "role": "admin",
            "username": "username",
            "password": "pass"
        },
        ...
        {
            "role": "evadie",
            "username": "username",
            "password": "pass"
        }
    ]
}
```

### Instalación de dependencias

```sh
npm install
```

### Eejecución

Los siguientes scripts pueden ser utilizados con nodejs para desplegar el proyecto

<table><tbody><tr><td>Ambiente</td><td>Comando</td></tr><tr><td>localhost</td><td>npm run start</td></tr><tr><td>dev.paho-dhis2.org</td><td>npm run start:dev</td></tr><tr><td>238.dev.paho-dhis2.org</td><td>nom run start:dev238</td></tr></tbody></table>
