# merimerimeri.com

[![CI](https://github.com/MeriMeriMeri/merimerimeri.com/actions/workflows/ci.yml/badge.svg)](https://github.com/MeriMeriMeri/merimerimeri.com/actions/workflows/ci.yml)

Website for MeriMeriMeri Software — a studio that builds focused, delightful software products.

See it live at [merimerimeri.com](https://merimerimeri.com).

## Development

Requires Ruby and Node.js. Versions are pinned in `.ruby-version` and `.nvmrc`.

### Installing dependencies

Prerequisites:

1. Ruby 3.3.x
2. Node.js/npm

Install app dependencies with:

`./bin/setup`

This installs Bundler if needed, then runs `bundle install` and `npm ci`.

### Running the website

`bundle exec jekyll serve`

## CI

Every pull request (and push to non-main branches) runs a build check via GitHub Actions to catch errors before merging. The workflow installs Ruby/Node dependencies and runs:

```bash
bundle exec jekyll build
```

To run the same check locally:

```bash
bundle install && npm install
JEKYLL_ENV=production bundle exec jekyll build
```

## Deployment

Pushing to `main` triggers a separate GitHub Actions workflow that builds the Jekyll site and deploys it to Cloudflare Pages.
