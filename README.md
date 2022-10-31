# mingas
##For run container use from source:

docker build --tag nodesite:latest .

docker run --rm --name site -p 8080:3000 nodesite