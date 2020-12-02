<template>
  <Layout>
    <ShowcaseProducts :products ="products" :subtitle="subtitle" :title="title" />
  </Layout>
</template>


<script>
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";

export default {
  components: {
    ShowcaseProducts,
  },
  data() {
    return {
       subtitle:"subtitle",
       title:"title",

      products : [
        {
        title : "Spa",
        content :"Todo tipo de masajes y técnicas",
        },
        {
        title : "Bioseguridad",
        content :"Altos estandares de bioseguridad",
        },
        {
        title : "Piscina",
        content :"Piscina temperada de bioseguridad",
        },
      ],

    };
  },
};
</script>
