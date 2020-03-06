# WMHD Online Radio Website
The official WMHD Online Radio Website, built with GatsbyJS.

## Developing Locally
### Prerequisites
Before installation, make you have the following installed on your system.
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)*
* [Gatsby-cli](https://www.gatsbyjs.org/docs/gatsby-cli/)

***Note**: *When I tried using NPM instead of yarn, the whole site broke for some reason. To avoid potential issues, just use Yarn.*

### Downloading and Setup
Once you have everything installed, you can then run the following commands to download the codebase and install all necessary dev dependencies.

```bash
git clone https://github.com/wmhd-radio/wmhd-radio-website
cd wmhd-radio-website
yarn install
```

### Launching local development environment
With the codebase downloaded and all of the dev dependencies installed, you can run the following command to start a local development server.
```bash
gatsby develop
```
From here, simply navigate to the webpage it tells you and edit the code with any code editor you prefer. The webpage will automatically update (hot-reload) when you change the code.

## Deploying changes
To deploy directly to production, simply push to the master branch. Alternatively, create a new branch and then create a pull request to have a live preview automatically generated.