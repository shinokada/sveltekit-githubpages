import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, b as insert_hydration, H as append_hydration, C as noop } from "../../chunks/index-e98e3991.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let ul;
  let li0;
  let t4;
  let t5;
  let li1;
  let t6;
  let t7;
  let li2;
  let t8;
  let t9;
  let li3;
  let t10;
  let t11;
  let li4;
  let t12;
  let t13;
  let p1;
  let t14;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Welcome to SvelteKit + GitHub Pages");
      t1 = space();
      p0 = element("p");
      t2 = text("It is super easy to publish SvelteKit project on GitHub Pages. Create a GitHub repo before starting this.");
      t3 = space();
      ul = element("ul");
      li0 = element("li");
      t4 = text("Install SvelteKit");
      t5 = space();
      li1 = element("li");
      t6 = text("Install @sveltejs/adapter-static and gh-pages. `npm i -D @sveltejs/adapter-static gh-pages`");
      t7 = space();
      li2 = element("li");
      t8 = text("Update svelte.config.js by changing adapter-auto to adaptor-static.\n   `import adapter from '@sveltejs/adapter-static';`");
      t9 = space();
      li3 = element("li");
      t10 = text("Add the following to `src/routes/+layout.js`\n    `export const prerender = true;`");
      t11 = space();
      li4 = element("li");
      t12 = text('Add a script to package.json. `"gh-pages": "npm run build && npx gh-pages -d build"`');
      t13 = space();
      p1 = element("p");
      t14 = text("Now you just need to run `npm run gh-pages`.");
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Welcome to SvelteKit + GitHub Pages");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "It is super easy to publish SvelteKit project on GitHub Pages. Create a GitHub repo before starting this.");
      p0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t4 = claim_text(li0_nodes, "Install SvelteKit");
      li0_nodes.forEach(detach);
      t5 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t6 = claim_text(li1_nodes, "Install @sveltejs/adapter-static and gh-pages. `npm i -D @sveltejs/adapter-static gh-pages`");
      li1_nodes.forEach(detach);
      t7 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t8 = claim_text(li2_nodes, "Update svelte.config.js by changing adapter-auto to adaptor-static.\n   `import adapter from '@sveltejs/adapter-static';`");
      li2_nodes.forEach(detach);
      t9 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t10 = claim_text(li3_nodes, "Add the following to `src/routes/+layout.js`\n    `export const prerender = true;`");
      li3_nodes.forEach(detach);
      t11 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t12 = claim_text(li4_nodes, 'Add a script to package.json. `"gh-pages": "npm run build && npx gh-pages -d build"`');
      li4_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      t13 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t14 = claim_text(p1_nodes, "Now you just need to run `npm run gh-pages`.");
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t4);
      append_hydration(ul, t5);
      append_hydration(ul, li1);
      append_hydration(li1, t6);
      append_hydration(ul, t7);
      append_hydration(ul, li2);
      append_hydration(li2, t8);
      append_hydration(ul, t9);
      append_hydration(ul, li3);
      append_hydration(li3, t10);
      append_hydration(ul, t11);
      append_hydration(ul, li4);
      append_hydration(li4, t12);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t14);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(ul);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(p1);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
