<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto min-h-screen overflow-x-hidden">
      <section
        class="post-content container mx-auto relative font-serif text-gray-700"
      >
        <div class="post-content-text mx-4 text-xl" v-html="$page.app.content"></div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    app(id: $id) {
        id
        content
      }
    }
</page-query>

<style>
.post-content-text a {
  color: #2c5282 !important;
  font-weight: bold;
}
</style>
