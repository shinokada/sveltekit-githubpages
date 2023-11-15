<script>
  import { blur } from 'svelte/transition';
</script>

<nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
  <div transition:blur={{duration: 2000}} class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
    <div class="flex items-center justify-between w-full md:w-auto">
      <div class="-mr-2 flex items-center md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden md:block items-baseline mr-8 px-2 py-1 rounded-lg text-sm font-medium bg-pink-100 text-pink-600 md:mt-2 lg:mt-0  glow-box-lang">
      English: Native
    </div>
    <div class="hidden md:block items-baseline mr-8 px-2 py-1 rounded-lg text-sm font-medium bg-pink-100 text-pink-600 md:mt-2 lg:mt-0  glow-box-lang">
      Spanish: B2 
    </div>
  </div>

  <!-- Mobile -->
  <div class="hidden md:block">
    <a href="#skills" class="font-medium text-gray-100 hover:text-green-300 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Technologies</a>
    <a href="#products" class="ml-10 font-medium text-gray-100 hover:text-green-300 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Products</a>
    <a href="#contact" class="ml-10 font-medium text-gray-100 hover:text-green-300 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Contact</a>
    <a href="#favorites" class="ml-10 font-medium text-gray-100 hover:text-green-300 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Favorites</a>
  </div>

  <div transition:blur={{duration: 2000}} class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
    <a href="https://github.com/diamondalltheway" target="_blank" class="ml-6 text-gray-600 hover:text-gray-700">
      <svg class="h-10 w-10 mx-6 text-green-600 bg-green-200 rounded-full glow-box-contact" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
      </svg>
    </a>
    <span class="inline-flex rounded-md glow-box-contact">
    <a href="#contact" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-green-100 hover:text-green-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
      Contact
    </a>
    </span>
  </div>
</nav>