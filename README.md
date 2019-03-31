
Backend : Django_rest_framework

Frontend : React, TypeScript, Material-UI

Database : PostgreSQL

VirtualMachine : Docker

Auth : JsonWebToken

# reference
https://github.com/18F/docker-compose-django-react

# command
docker-compose build

docker-compose up

docker ps

docker exec -it container-id-web django-admin startproject project-name

./project-name/project-name/settings.py DATABASES edit

docker exec -it container-id-web python project-name/manage.py runserver 0.0.0.0:8000

docker exec -it container-id-web python project-name/manage.py startapp app-name

# register model in Database
app-name/models.py edit

docker exec -it container-id-web python project-name/manage.py makemigrations

docker exec -it container-id-web python project-name/manage.py migrate

# create admin user
docker exec -it container-id-web python project-name/manage.py createsuperuser

