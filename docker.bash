docker build -t proxy .

docker tag proxy:latest bderegt/fec-more-homes:proxy

docker push bderegt/fec-more-homes:proxy