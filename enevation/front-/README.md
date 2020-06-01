# Avocado Nation Frontend 🥑

[![Netlify Status](https://api.netlify.com/api/v1/badges/83c50317-9af2-4c3c-a396-3e2b1b4a25b1/deploy-status)](https://app.netlify.com/sites/vigorous-chandrasekhar-bbd3e9/deploys)

## Local development

clone repo to your desktop via `git clone git@bitbucket.org:270b/avonation-frontend.git`

run `yarn` to populate `node_modules` folder and to create your `yarn.lock` file needed

### NOTE:until [fixed](https://github.com/netlify/cli/issues/659) by netlify use this specific version: `yarn global add netlify-cli@2.11.13`

install `yarn global add netlify-cli` to use ntl dev to run netlify serverless/lambda functions locally while also running react at the same time in one command.

to start the server locally you'll either need to request the `.env` file from me, or have it connect to the staging environment vis your own `.env` file. that allows us to safely use environment variables with passwords/credentials without fear of it getting exposed to clients/hackers as it is only used locally and not pushed to git.

run `yarn build:lambda` to get local build ready for lambda use.

once that is setup run the command `ntl dev` or `netlify dev` to run lambda functions locally and react locally in one command. \*note: if wanting to run the whole application locally, the api: `https://bitbucket.org/270b/avonation-api/` needs to be up and running first via it's [README](https://bitbucket.org/270b/avonation-api/src/master/README.md)

After running the server, you can navigate to `http://localhost:8888`

## Frontend deployment to Netlify

- Push repository on Bitbucket.
- Create new site on [Netlify](https://www.netlify.com/) and connect that repository to it.
- Add environment variables to Netlify based on `frontend/.env` file, make sure to replace API and Frontend URLs, e.g. `REACT_APP_API_URL=https://avonation-api.heroku.com/graphql` and `REACT_APP_FRONTEND_URL=https://vigorous-chandrasekhar-bbd3e9.netlify.com`

- After every change to the master branch in Bitbucket, Netlify will build and deploy frontend automatically!

### NOTE: if changing environment var on netlify you MUST redeploy to see changes!

## CSS naming conventions for avonation-frontend

- We're using the BEM standards for all new classes created.
- Please review the standards [Here](http://getbem.com/) so that we're on the same page.
