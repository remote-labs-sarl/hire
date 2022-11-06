## [NX.dev](http://nx.dev)

### Upgrade all dependencies and migrate NX to the latest versions

```bash
npx nx migrate latest
npx nx migrate --run-migrations
```

```bash
npx npm-check --update
// OR
npm install $(npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$' echo '$@latest' | xargs echo)
```
