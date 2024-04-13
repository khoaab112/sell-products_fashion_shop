# Sử dụng image node:16-alpine làm base image
FROM node:16-alpine

# Cài đặt http-server bằng npm
RUN npm install -g http-server

# Cài đặt Yarn
RUN apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    export PATH="$HOME/.yarn/bin:$PATH"

# Đặt thư mục làm việc mặc định là /app
WORKDIR /app

# Copy yarn.lock và package.json vào thư mục làm việc và chạy yarn install
COPY yarn.lock package.json ./
RUN yarn install

# Copy toàn bộ dự án vào thư mục làm việc
COPY . .

# Mở cổng 8080
EXPOSE 8080

# Chạy lệnh `yarn serve` khi container được khởi chạy
CMD [ "yarn", "serve" ]
