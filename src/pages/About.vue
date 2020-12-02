<template>
  <Layout>
    <Simple :slides="slides" />
  </Layout>
</template>

<script>
import Simple from "~/components/application-ui/navigation/vertical-navigation/simple.vue";
export default {
  components: {
    Simple,
  },
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      slides: [
        {
          title: "Title 1",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
        },
        {
          title: "Title 2",
          content:
            "amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
        },
        {
          title: "Title 3",
          content:
            "Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
        },
        {
          title: "Title 4",
          content:
            "veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
        },
      ],
    };
  },
};
</script>
