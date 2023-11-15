<script lang="ts">
  import Header from './header.svelte';
  import Hero from './hero.svelte';
  import Letter from './letter.svelte';
  import TechStack from './techStack.svelte';
  import Products from './products.svelte';
  import LaunchSchool from './launchSchool.svelte';
  import Contact from './contact.svelte';
  import Favorites from './favorites.svelte';
  import Footer from './footer.svelte';

  import { onMount } from 'svelte';

  let ready = false;

  onMount(() => {
    ready = true;
  })
</script>

{#if ready}
  <Header/>
  <Hero/>
  <Letter/>
  <TechStack/>
  <Products/>
  <LaunchSchool/>
  <Contact/>
  <Favorites/>
  <Footer/>
{/if}
