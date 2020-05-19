sudo service docker start
docker login
docker pull bderegt/fec-more-homes:proxy
docker stop proxy
docker container rm proxy
docker run -d -p 3000:3000 --name proxy bderegt/fec-more-homes:proxy
