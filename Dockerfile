FROM "node"

WORKDIR /vision-board

COPY package.json .

RUN npm install 

COPY . .

CMD ["npm" , "start"]