FROM node:24-bookworm-slim AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack install -g pnpm@12.21.0 && pnpm install --frozen-lockfile
COPY tsconfig.json vite.config.ts ./
COPY src ./src
COPY content ./content
COPY public ./public
ARG VITE_GITHUB_PROFILE
ARG VITE_LINKEDIN_PROFILE
ARG VITE_CONTACT_EMAIL
RUN pnpm run build

FROM node:24-bookworm-slim
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
