# prueba_tecnica

## Descripción general
Proyecto de "Listado y Estadísticas de Usuarios". El Backend esta desarrollado con Laravel10(APIRest) y el Frontend con VueJs 3.

## Instalación
Seguir los siguientes paso para la instalacion y puesta en marcha del proyecto, una ves clonado o descargado el proyecto:

BACKEND:
1. Navegar hasta el directorio del proyecto: `cd users_list_statistics_back`
2. Contruir el proyecto con composer: `composer install`
3. Crear una base de datos y configurar el archivo .env con la conexion a la misma.
4. Migrar y ejecutar los seed para poblar la base de datos: `php artisan migrate --seed`
5. Poner en marcha el Proyecto: `php artisan serve`
6. El proyecto se ejecutara en la direccion `http://127.0.0.1:8000`.

Ejemplos de consultas a la APIRest:
http://127.0.0.1:8000/api/v1/users

http://127.0.0.1:8000/api/v1/usersbyrole

http://127.0.0.1:8000/api/v1/filterbyrole/manager

FRONTEND:
1. Navegar hasta el directorio del proyecto: `cd users_list_statistics_front`
2. Contruir el proyecto con composer: `npm install`
3. Poner en marcha el Proyecto: `npm run dev`
4. El proyecto se ejecutara en la direccion `http://localhost:5173`
