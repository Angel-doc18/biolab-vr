# The Klass8 API (server/main.js) for Klass8's own server. See deploy.sh.
FROM node:24-slim
WORKDIR /app
ENV NODE_ENV=production DATA_DIR=/data PORT=8787
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY src ./src
COPY server ./server
COPY migrations ./migrations
COPY assets ./assets
USER node
EXPOSE 8787
CMD ["node", "--disable-warning=ExperimentalWarning", "server/main.js"]
