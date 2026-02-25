# merimerimeri.com

[![CI](https://github.com/MeriMeriMeri/merimerimeri.com/actions/workflows/ci.yml/badge.svg)](https://github.com/MeriMeriMeri/merimerimeri.com/actions/workflows/ci.yml)

Website for MeriMeriMeri Software — a studio that builds focused, delightful software products.

See it live at [merimerimeri.com](https://merimerimeri.com).

## Development

### Installing dependencies

1. `bundle install`
2. `npm install`

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
