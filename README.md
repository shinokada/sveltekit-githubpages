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

```js
import adapter from '@sveltejs/adapter-static';
```

## +layout.js

Add the following to `src/routes/+layout.js`

```js
export const prerender = true;
```

## Add a script to package.json. 

```json
"gh-pages": "npm run build && npx gh-pages -d build"
```

## Deploy

Now you just need to run `npm run gh-pages`.

## .nojekyll file for Tailwind CSS/Postcss

If you are using a postcss such as Tailwind css, you need to add **an empty `.nojekyll`** file to the `gh-pages` branch.

