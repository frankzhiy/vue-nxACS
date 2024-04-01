# 使用适用于amd64架构的node镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目源代码复制到工作目录
COPY . .

# 暴露容器的7093端口
EXPOSE 7093

# 运行项目
CMD [ "npm", "run", "serve" ]
