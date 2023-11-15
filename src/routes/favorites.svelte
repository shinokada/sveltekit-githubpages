<script>
  import { fade } from "svelte/transition";

  // type Favorites = {
  //   books: boolean;
  //   movies: boolean;
  //   shows: boolean;
  //   places: boolean;
  //   goat: boolean;
  // }


  const favorites = {
    books: false,
    movies: false,
    shows: false,
    places: false,
    goat: false
  }
</script>

<!-- Favorites -->
<div id="favorites" class="bg-slate-950">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-center text-3xl leading-9 font-extrabold text-green-400 sm:text-4xl sm:leading-10 glow-green">
        Favorites
      </h2>
      <div class="mt-6 border-t-2 border-gray-200 pt-6">
        <dl>

          <!-- Books -->
          <div>
            <dt class="text-lg leading-7">
              <button on:click={() => favorites.books = !favorites.books} class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                <span class="font-medium text-green-300">&#128218; Favorite Books</span>
                <span class="ml-6 h-7 flex items-center">
                  <svg class="h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
            </dt>
            {#if favorites.books}
              <dd class="mt-2 pr-12">
                <p class="text-base leading-6 text-gray-400">
                  1. <span class="font-bold text-gray-200"> The Little Prince</span>, Antoine de Saint-Exupéry
                  <br>
                  2. <span class="font-bold text-gray-200"> 12 Rules for Life</span>, Jordan B. Peterson
                  <br>
                  3. <span class="font-bold text-gray-200">Hard Thing About Hard Things</span>, Ben Horowitz
                  <br>
                  4. <span class="font-bold text-gray-200">Zero to One</span>, Peter Thiel
                  <br>
                  5. <span class="font-bold text-gray-200">Rework</span>, Jason Fried • David Heinemeier Hanson
                  <br>
                  6. <span class="font-bold text-gray-200">Delivering Happiness</span>, Tony Hsieh
                  <br>
                  7. <span class="font-bold text-gray-200">The Launch Pad: Inside Y Combinator</span>, Randal Stross
                  <br>
                  8. <span class="font-bold text-gray-200">Remote</span>, Jason Fried • David Heinemeier Hanson
                  <br>
                  9. <span class="font-bold text-gray-200">Shoe Dog</span>, Phil Knight
                  <br>
                  10. <span class="font-bold text-gray-200">Crazy Love</span>, Francis Chan
                  <br>
                  11. <span class="font-bold text-gray-200">Tocqueville and the American Experiment</span>, William R. Cook
                  <br>
                  12. <span class="font-bold text-gray-200">Extreme Ownership</span>, Jacko Wilink • Leif Babin
                  <br>
                  13. <span class="font-bold text-gray-200">Outliers</span>, Malcom Gladwell
                  <br>
                  14. <span class="font-bold text-gray-200">David and Goliath</span>, Malcom Gladwell
                  <br>
                  15. <span class="font-bold text-gray-200">A New Grammar Reference of Modern Spanish</span>, John Butt • Carmen Benjamin
                </p>
              </dd>
            {/if}
          </div>


          <!-- Movies -->
            <div class="mt-6 border-t border-gray-200 pt-6">
              <div>
                <dt class="text-lg leading-7">
                  <button on:click={() => favorites.movies= !favorites.movies} class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                    <span class="font-medium text-green-400">&#127871; Favorite Movies</span>
                    <span class="ml-6 h-7 flex items-center">
                      <svg class="h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  </button>
                </dt>
                {#if favorites.movies}
                  <dd  class="mt-2 pr-12">
                    <p class="text-base leading-6 text-gray-400">
                      1. <span class="font-bold text-gray-200">You've Got Mail</span>
                      <br>
                      2. <span class="font-bold text-gray-200">Interstellar</span>
                      <br>
                      3. <span class="font-bold text-gray-200">Blood Diamond</span>
                      <br>
                      4. <span class="font-bold text-gray-200">Angels in the Outfield</span>
                      <br>
                      5. <span class="font-bold text-gray-200">Lord of the Rings</span> (Trilogy)
                      <br>
                      6. <span class="font-bold text-gray-200">Gangs of New York</span>
                      <br>
                      7. <span class="font-bold text-gray-200">100 Foot Journey</span>
                      <br>
                      8. <span class="font-bold text-gray-200">The Matrix</span>
                      <br>
                      9. <span class="font-bold text-gray-200">Training Day</span>
                      <br>
                      10. <span class="font-bold text-gray-200">Catch Me If You Can</span>
                    </p>
                  </dd>
                {/if}
              </div>
            </div>



          <!-- Shows -->
            <div class="mt-6 border-t border-gray-200 pt-6">
              <div>
                <dt class="text-lg leading-7">
                  <button on:click={() => favorites.shows = !favorites.shows} class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                    <span class="font-medium text-green-500"> &#127916; Favorite TV Shows</span>
                    <span class="ml-6 h-7 flex items-center">
                      <svg class="h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  </button>
                </dt>
                {#if favorites.shows}
                <dd class="mt-2 pr-12">
                  <p class="text-base leading-6 text-gray-400">
                    1. <span class="font-bold text-gray-200">Severance</span>
                    <br>
                    2. <span class="font-bold text-gray-200">Suits</span>
                    <br>
                    3. <span class="font-bold text-gray-200">That 70's Show</span>
                    <br>
                    4. <span class="font-bold text-gray-200">Body Gaurd</span>
                    <br>
                    5. <span class="font-bold text-gray-200">Line of Duty</span>
                    <br>
                    6. <span class="font-bold text-gray-200">Dexter</span>
                    <br>
                    7. <span class="font-bold text-gray-200">Cheers</span>
                    <br>
                    8. <span class="font-bold text-gray-200">Yu Yu Hakusho</span>
                    <br>
                    9. <span class="font-bold text-gray-200">True Detective</span>
                    <br>
                    10. <span class="font-bold text-gray-200">Fargo</span>
                  </p>
                </dd>
                {/if}
              </div>
            </div>



          <!-- Places -->
          <div class="mt-6 border-t border-gray-200 pt-6">
            <div>
              <dt class="text-lg leading-7">
                <button on:click={() => favorites.places = !favorites.places} class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                  <span class="font-medium text-green-600">&#127758; Favorite Places on Earth</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg class="h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                </button>
              </dt>
              {#if favorites.places}
              <dd class="mt-2 pr-12">
                <p class="text-base leading-6 text-gray-400">
                  1. <span class="font-bold text-gray-200">The Woodlands, Texas </span> (I'm a hometown kind of guy)
                  <br>
                  2. <span class="font-bold text-gray-200">Tenerife, Spain</span> (Incredible amount of microclimates)
                  <br>
                  3. <span class="font-bold text-gray-200">Medellín, Colombia </span> (Lived here for 5 years, más paisa que una arepa)
                  <br>
                  4. <span class="font-bold text-gray-200">Denver, Colorado </span> (Lived here for a year, Rocky Mountain Air)
                  <br>
                  5. <span class="font-bold text-gray-200">Papagayo, Costa Rica </span> (Great family memories)
                  <br>
                  6. <span class="font-bold text-gray-200">Rome, Italy </span> (If Rome can fall, nothing is forever)
                  <br>
                  7. <span class="font-bold text-gray-200">Maui, Hawaii</span> (Never been more relaxed)
                  <br>
                  8. <span class="font-bold text-gray-200">Nassau, Bahamas </span>(More fond family memories)
                  <br>
                  9. <span class="font-bold text-gray-200">Cusco, Peru </span> (Ancient)
                  <br>
                  10. <span class="font-bold text-gray-200">Lima, Peru </span> (Ceviche)
                  <br>
                  11. <span class="font-bold text-gray-200">Florence, Italy</span> (Refreshing taste of craftsmanship)
                  <br>
                  12. <span class="font-bold text-gray-200">San Pedro de Atacama, Chile </span> (Surreal landscapes)
                  <br>
                  13. <span class="font-bold text-gray-200">Kauai, Hawaii</span> (Classic family memories)
                  <br>
                  14. <span class="font-bold text-gray-200">Grand Cayman, Cayman Islands</span> (Islands are easy to love)
                  <br>
                  15. <span class="font-bold text-gray-200">Lübbecke, Germany</span> (First taste of Europe)
                  <br>
                  16. <span class="font-bold text-gray-200">Jardín, Colombia </span> (Named "Garden" in Spanish for it's beauty)
                  <br>
                  17. <span class="font-bold text-gray-200">Madrid, Spain</span> (All around underrated)
                  <br>
                  18. <span class="font-bold text-gray-200">Granada, Spain</span> (Creativity that inspires)
                  <br>
                  19. <span class="font-bold text-gray-200">Paracas, Perú</span> (Animals all over the place)
                  <br>
                  20. <span class="font-bold text-gray-200">Valle de Corcoa, Colombia</span> (Tallest palm trees in the world)
                  <br>
                </p>
              </dd>
              {/if}
            </div>
          </div>

          <!-- GOAT -->
          <div class="mt-6 border-t border-gray-200 pt-6">
            <div>
              <dt class="text-lg leading-7">
                <button on:click={() => favorites.goat = !favorites.goat} class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                  <span class="font-medium text-green-700">
                    &#127936; Greatest of All Time  
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg
                      class="h-6 w-6 transform"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              {#if favorites.goat}
              <dd class="mt-2 pr-12">
                <p class="font-bold text-gray-200">
                  Jordan.
                </p>
              </dd>
              {/if}
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>