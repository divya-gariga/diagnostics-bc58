FROM node:17
WORKDIR /app
RUN npm install -g json-server
COPY db.json .
EXPOSE 3003
CMD ["json-server", "-p","3003","-H","0.0.0.0","-w", "db.json"]
