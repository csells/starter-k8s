docker stop $(docker ps -q --filter ancestor=backend)
docker stop $(docker ps -q --filter ancestor=frontend)
docker ps
