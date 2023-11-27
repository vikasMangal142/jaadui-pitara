Clone or download the zip file from here
### https://github.com/vikasMangal142/jaadui-pitara


Steps to install docker in your system
### sudo apt install docker.io
### sudo snap install docker

Check docker version
### docker --version

Pull docker hub image to checko docker working or not
### sudo docker run hello-world

Check it using this for the list of images running
### sudo docker images


Now Create Docker image (note: here jpprojecto is the name of folder in which 
your zip file is unzipped or folder inside which cloning process is done)
### sudo docker build -f Dockerfile.dev -t jpprojecto .

To Run image (Here 8000 is the port no., where you want your docker image to run 
and 3000 is the basic react port of your project)(jpqa is the name of the image 
we are giving while running the image)
### sudo docker run -it --name jpqa -p  8000:3000 jpprojecto

use this to run the docker image
### docker compose up
