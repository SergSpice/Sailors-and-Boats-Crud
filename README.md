## Despliegue entorno de desarrollo

```
## Clonar el repositorio de este proyecto
git clone git@gitlab.com:NruizG/taller-bdd.git
```

* Entrar a la carpeta del proyecto y levantar el archivo docker-compose.yml con el siguiente comando:

```
## Este comando levanta un imagen con al base de datos mariadb y otra phpmyadmin
sudo docker-compose up -d
```

*  En el navegador entrar al siguiente url: 
```
localhost:7300

username: root
password: shadowfax
```

* Crear una base de datos llamada "taller_bdd"


* Desde la base de datos recien creada importar el archivo sailors_data.sql ubicado en 

```
/taller_bdd/backend/migrations/
```

* Entrar a la carpeta 'backend' desde la consola y escribir los siguientes comandos:


```
## Instala los modulos de node:
npm install

## Levanta la aplicacion sails. Cuando pregunte por una opción elegir la Nº 1
sails lift
```

* Entrar a la carpeta frontend desde otra consola y escribir los siguientes comandos:

```
## Instalar modulos
npm install

## Levantar aplicación angular en modo desarrollo
ng serve --open // la opcion --open abrirá la aplicacion automaticamente en el navegador
