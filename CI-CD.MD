# CI/CD pipeline

Right now, we only have CD pipeline. The CI part (linting, checking, testing, and all the good stuff) are in the backlog.

The CD pipeline is set up using GitHub Actions. It will run based on the following triggers:

- Code merged/pushed to *master* branch

It will do the following:

- Checkout the code
- Build the code
- Push the code to Heroku

For more details, see the [.github/workflows](.github/workflows).