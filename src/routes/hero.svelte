<script>
  import { blur } from 'svelte/transition';
</script>

<div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
  <div class="text-center">
    <div class="mx-auto">
      <img transition:blur={{duration: 1500}} class="h-48 w-48 rounded-xl xl:h-80 xl:w-80 mx-auto glow-box" src="/headshot.jpeg" alt="" />
    </div>
    <h2 transition:blur={{duration: 2000}} class="mt-10 text-4xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl drop-shadow-lg glow">
      Hunter Stevens
      <br class="md:block">
      <span transition:blur={{duration: 3000}} class="bg-gradient-to-r text-indigo-300">Full-Stack Developer</span>
    </h2>

    <div class="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-xl md:mt-5 md:text-xl md:max-w-3xl">
      <div transition:blur={{duration: 3500}}>
        Education:
        <a href="https://launchschool.com/courses" target="_blank">
          <span class="font-semibold text-green-400 italic">
            University of Houston (BBA in Marketing)
          </span>
        </a>
        <br>
      </div>

      <div transition:blur={{duration: 4000}}>
        Certifications: 
        <a href="https://launchschool.com/courses" target="_blank">
          <span class="font-semibold text-green-300 italic">
            Launch School <span class="font-light">(Core Curriculum)</span>
          </span>
        </a>
      </div>

      <div transition:blur={{duration: 4500}}>
        Building: <span class="font-semibold text-green-300 italic">DataForest.io</span>
      </div>
      
      <div transition:blur={{duration: 5000}}>
        Learning: <span class="font-semibold text-green-300">React</span>
      </div>
    </div>
  </div>
</div>