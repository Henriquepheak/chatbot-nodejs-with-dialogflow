# Contribution Guide

If you're new to contributing, please don't hesitate to ask us.

## Before Making Changes

Not all changes or new features submitted will be accepted.  Please discuss your proposed changes before working on them to avoid wasted efforts. Only work on something which is tracked in an Asana issue.

## Making Changes

- Fork repo on Github.

- Set up your development environment.

- Create a branch to house your changes. New branches **must** be based on the `production` branch.

- Check for unnecessary whitespace with `git diff --check` before committing. Commit whitespace and other code cleanups separately so that your actual changes can be easily understood.

- Write a proper commit message with the first line being a short, **present-tense explanation of the change**.  Wrap all lines at 80 characters.

- **Always make [atomic commits](https://dev.to/cbillowes/why-i-create-atomic-commits-in-git-kfi)**, meaning you can revert and cherry-pick a specific commit individually, meaning there should be no unrelated changes within a commit.

- **Add tests for your changes**. Not all changes require tests (e.g. whitespace and other code cleanups).

- Document your changes: this means you should include all important details (e.g. a link to StackOverflow, how you came up with the solution, implications, caveats, heads-ups, etc.) in one or more of the following places:
  - Commit descriptions
  - Pull request descriptions
  - The *docs* folder

## Submitting Changes

- Push your changes to **your fork** of the repository (and to your custom branch if you created one).

- Submit two pull requests on repo:
  - one for the custom branch (e.g. `feature/x <- feature/x`)
  - second for the deployment branch (e.g. `staging <- feature/x`)

- Ask for reviews. Please don't ask post-haste, e.g. *"I need to deploy this ASAP"*, it's a common source of disasters.

- Respond to all feedbacks.

## Merging flows
- Custom branch across fork
  - For the first commit, use **"Squash and merge"**
  - Next commit, use **"Create a commit merge"** / **"Merge pull request"**
- Custom branch to staging
  - Always use **"Create a commit merge"** / **"Merge pull request"**
- Custom branch to production
  - Always use **"Squash and merge"**

## Warning

Unless it's prefixed with "WIP" in the title, a pull request **must** contain a completed work.

Pull request prefixed with "WIP" should not be merged. This is useful when you have not finished the work but need to solicit feedbacks nonetheless.

**Never pull from *staging* branch to your custom branch. If you are encountering a merge conflict when you want to merge to staging, don't 'resolve' it via GitHub web UI, instead make a new PR from your *staging* branch and resolve the conflict locally (without tainting your custom branch).**
