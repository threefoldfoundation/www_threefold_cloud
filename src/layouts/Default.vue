<template>
  <div class="container mx-auto">
    <NavBar @setTheme="setTheme" :theme="this.theme" />
    <slot />
    <Footer
      desc="Making the world a better place through constructing elegant
            hierarchies."
      :footerLinks="$static.footer.items"
    />
  </div>
</template>


<script>
import NavBar from "~/components/custom/Navbar/Navbar.vue";
import Footer from "~/components/marketing/sections/cta-sections/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    },
  },
};
</script>
<static-query>
query {
  metadata {
    siteName
  }

  footer(id: "footer"){
      items{
        title
        links{
          name
          link
        }
      }
    }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding-top: 100px;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
