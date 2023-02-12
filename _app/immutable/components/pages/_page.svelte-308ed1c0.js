import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../chunks/index-e98e3991.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Welcome to SvelteKit");
      t1 = space();
      p = element("p");
      t2 = text("Visit ");
      a = element("a");
      t3 = text("kit.svelte.dev");
      t4 = text(" to read the documentation");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Welcome to SvelteKit");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Visit ");
      a = claim_element(p_nodes, "A", { href: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "kit.svelte.dev");
      a_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " to read the documentation");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://kit.svelte.dev");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
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
        detach(p);
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
