# syntax=docker/dockerfile:1
FROM node:16.17.0
WORKDIR /billsys
COPY . .
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
RUN yarn install --production
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
