docker build -t backend src/backend
docker build -t frontend src/frontend
docker run -p:8080:8080 -d -t backend
docker run -p:80:8080 -d -t frontend
Start-Process http://localhost/
docker ps
