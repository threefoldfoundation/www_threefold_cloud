<template>
        <section class="py-0  my-10 px-0 shadow-xl bg-white ">
            <div class="flex flex-wrap items-center -mx-8">
              <div class="w-1/3 pl-8">
                <img class="object-cover" :src="img" :alt="imgAlt"/>
              </div>
              <div class="w-2/3 px-20 text-left">
                <h2 class="text-4xl font-semibold font-tf-secondary">{{ header }}</h2>
                <p class="mt-6 mb-8 text-gray-400 leading-relaxed">{{ subtitle }} <br> can benifit everyone on the planet.</p>
                <div class="flex ml-52 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <a  href="#">
                        <svg  class="fill-current text-green-600 h-11 w-11 " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.04 315.72"><title>Arrows</title><path class="cls-1" d="M46.17,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L274.84,244.54a14.64,14.64,0,0,1,3.74,11,14.24,14.24,0,0,1-3.74,8.19L149.26,402.36a17.41,17.41,0,0,1-19.78,9.14l-83.7.5c-.48-.14-8.05-2.47-10.24-10.14a15.37,15.37,0,0,1,2.22-12.61L159,254.1,36.28,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,46.17,96.56Z" transform="translate(-35 -96.28)"/><path class="cls-1" d="M232.57,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L461.24,244.54a14.69,14.69,0,0,1,3.73,11,14.25,14.25,0,0,1-3.73,8.19L335.65,402.36a17.39,17.39,0,0,1-19.77,9.14l-83.71.5c-.47-.14-8-2.47-10.23-10.14a15.37,15.37,0,0,1,2.22-12.61L345.39,254.1,222.68,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,232.57,96.56Z" transform="translate(-35 -96.28)"/></svg>
                    </a><a class="inline-block text-green-600 hover:underline py-2 ml-6 uppercase text-right font-bold" href="#">{{ link_text }}</a>
                </div>
                
              </div>
            </div>
          </section>


</template>

<script>
export default {
  props: ["header",  "subtitle","link_text","img","imgAlt"],
};
</script>