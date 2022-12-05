# Node Version
FROM node:12.18.1

# App Dir
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# App Bundle
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
