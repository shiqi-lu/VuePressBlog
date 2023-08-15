# 《第一本docker书》学习笔记

## 基础用法

- 查看docker是否正常工作/信息的命令?
    - `sudo docker info`
- 列出docker容器的命令？
    - `docker ps`
    - 所有容器-a，只看最后一个-l，只返回容器ID-q
- 创建交互式容器并命名？
    - `sudo docker run --name my_container -i -t ubuntu /bin/bash`
    - --name指定容器名字，-i指容器开启STDIN可交互使用，-t指用什么基础镜像
- 启动已经停止运行的容器？
    - `sudo docker start my_container`
    - `sudo docker start aa38f0f4`
    - 后可接容器名或ID
- 通过名字/ID附着到正在运行的容器？
    - `sudo docker attach my_container`
- 创建守护式容器？
    - `sudo docker run --name daemon_container -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"`
- 查看容器日志？
    - `sudo docker logs daemon_container`
    - -f可监控，--tail 10可看最后10行
- 查看容器内进程？
    - `sudo docker top daemon_container`
- 查看容器的硬件统计信息？
    - `sudo docker stats daemon_container`
- 在容器内部启动额外进程？交互/后台
    - 后台：`sudo docker exec -d daemon_container touch /etc/config`
    - 交互：`sudo docker exec -t -i daemon_container /bin/bash`
- 通过名字/ID停止正在运行的容器？
    - `sudo docker stop daemon_container`
- 程序出错docker自动重启容器？
    - `sudo docker run --restart=always --name my_container -d ubuntu /bin/sh -c 
 "while true; do echo hello world; sleep 1; done"`
    - --restart为always时，无论容器退出代码是什么都会重启；设置为on-failure只有退出为非0值才自动重启，此外on-failure可设置重启次数：`--restart=on-failure:5`
- 查看容器详细信息？
    - `sudo docker inspect my_container`
- 删除容器？
    - `sudo docker rm 80483829fd`
- 创建镜像并绑定端口？
    - 这个是把容器内的 80 端口映射到本机的 8080 端口
    - `sudo docker run --name daemon_container -p 8080:80 -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"`
- 启动docker容器并把需要的文件挂载进去
    - 使用选项`-v your_directory:docker_directory`
    - 如：`docker run --rm -ti -v /home/jp:/home/ai harbor.atompai.com/nitrogen/ai_kernel:n1 /bin/bash`
    - 镜像启动之后切换入/home/ai即可看到你的文件
    - 两边的修改结果都会实时反映

## 镜像构建命令
- 参考：
    - [docker官网](https://docs.docker.com/engine/reference/builder/)，Dockerfile reference
- 列出docker镜像？
    - `sudo docker images`
    - 后可加具体镜像名
- 拉取docker镜像？
    - sudo docker pull ubuntu:12.04
- 查找镜像？
    - `sudo docker search puppet`
- 登录Docker Hub?
    - `sudo docker login`
- 使用commit命令创建镜像步骤？
    - 运行一个容器，如：`sudo docker run -i -t ubuntu /bin/bash`
    - 在里面运行一堆命令
    - 使用exit命令退出容器
    - 提交定制容器：`sudo docker commit 41a932fe hub_name/apache2`
41a..是容器ID，hub_name是仓库名，apache2是镜像名，后还能使用`:webserver`添加标签
- 使用Dockerfile创建镜像步骤？
    - 创建Docker文件
    - 构建新镜像命令：`sudo docker build -t="hub_name/static_web:v1" .`
- 把镜像推送到Docker Hub?
    - `sudo docker push static_web`
- 删除镜像？
    - `sudo docker rmi jamtur01/static_web`

## docker compose
- 安装
    - `sudo pip install docker-compose`
- 测试是否工作
    - `docker-compose --version`
- 启动/守护进程启动
    - `sudo docker-compose up`
    - 守护进程加-d
- 列出所有docker-compose中的服务
    - `sudo docker-compose ps`
- 停止服务
    - `sudo docker-compose stop`
- 删除服务
    - `sudo docker-compose rm`
