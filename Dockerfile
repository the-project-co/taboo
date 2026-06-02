# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install build dependencies and copy source
COPY package.json package-lock.json* ./
RUN npm install

COPY . ./
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "dist/server.cjs"]
