FROM node:12.18.1
ENV NODE_ENV=production
ENV SMN_PORT=5063
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "-r", "esm", "app/App.mjs" ]
