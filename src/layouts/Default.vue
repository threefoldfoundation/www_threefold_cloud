<template>
  <div class="container mx-auto">
    <NavBar
      :navigation="$static.navigation"
      @setTheme="setTheme"
      :theme="this.theme"
    />
    <slot />
    <Footer 
      :record="$static.footer"
      @setTheme="setTheme"
      :theme="this.theme" />
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

  navigation(id: "navigation"){
    navLinks{
      name
      link
      external
      expandable
      submenu {
        title
        path
        external
      }
    }
    social{
      icon
      link
    }
  }

  footer(id: "footer"){
      facebook
      github
      twitter
      dribbble
      instagram
      description
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
