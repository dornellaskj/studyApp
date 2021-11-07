# StudyApp

## Docker
ng build --prod

docker image build -t study-app .

docker run -p 80:80 --rm study-app

docker container ls


//deploy docker image
docker tag study-app:latest 074177506936.dkr.ecr.us-west-2.amazonaws.com/study-app:latest

docker push 074177506936.dkr.ecr.us-west-2.amazonaws.com/study-app:latest