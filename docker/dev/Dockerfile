FROM node:10.7

ENV APP_ROOT_HOME /app
WORKDIR $APP_ROOT_HOME

# We need package.json copied to install deps in the next step
COPY package.json $APP_ROOT_HOME
RUN yarn install
RUN yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start:dev" ]
