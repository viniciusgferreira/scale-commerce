# Node Version
FROM node:12.18.1

# App Dir
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# App Bundle
COPY . .

# ENV PORT
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "build", "npm", "run", "start"]
