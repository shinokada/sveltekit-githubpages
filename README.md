<h1>Welcome to SvelteKit + GitHub Pages</h1>

It is super easy to publish SvelteKit project on GitHub Pages. Create a GitHub repo before starting this.


## Install SvelteKit

```sh
npm create svelte@latest my-app
```

## Install @sveltejs/adapter-static and gh-pages. 

```sh
npm i -D @sveltejs/adapter-static gh-pages
```

## Update svelte.config.js by changing adapter-auto to adaptor-static.

```sh
import adapter from '@sveltejs/adapter-static';
```

## Add a script to package.json. 

```sh
"gh-pages": "npm run build && npx gh-pages -d build"
```


## Deploy

Now you just need to run `npm run gh-pages`.

