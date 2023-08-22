el siguiente archivo ayuda en la configuración de sorry cypress

1. instalar cy2

```sh
     npm install -g cy2
 ````

2. correr docker con sorry cypres
```sh
    docker run -p 1234:1234 agoldis/sorry-cyress-director
```


3. correr pruebas

```sh
    export CYPRESS_API_URL="http://localhost:8080/"
    # ejecutar el comando, en mas de un terminal si se quiere correr las pruebas en paralelo
    cy2 run --record --key dhis2-test-fun --parallel --ci-build-id `date +%s`
```
