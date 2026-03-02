# merimerimeri.com

Website for MeriMeriMeri Software — a studio that builds focused, delightful software products.

See it live at [merimerimeri.com](https://merimerimeri.com).

## Development

Requires Ruby and Node.js. Versions are pinned in `.ruby-version` and `.nvmrc`.

### Installing dependencies

1. `bundle install`
2. `npm install`

### Running the website

`bundle exec jekyll serve`

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the Jekyll site and deploys it to Cloudflare Pages.
