FROM node:18
WORKDIR /app
RUN npm install -g npm@10
COPY package*.json .

## Copy your custom theme
COPY themes ./themes

# Copy config
COPY config ./config

# Copy medias
#COPY media ./media

# Copy public files
#COPY public ./public

## Copy translations
COPY translations ./translations

# Run npm install
RUN npm ci

# Build assets
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start"]
