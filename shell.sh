imageName='sufu_image_nginx'
containerName='sufu_container_nginx'

docker build -f ./DockerFile -t $imageName .
docker run -d -p 8080:80 --name $containerName $imageName