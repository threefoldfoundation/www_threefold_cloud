<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="person in team"
          :key="person.id"
          :record="person"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostListItem from "~/components/customize/Cards/PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      team: [
        {
          title: "Title Here",
          author: [
            {
              id: "id_name",
              image: "https://placehold.co/64x64",
              name: "Team member name",
              path: "#",
            },
          ],
          datetime: "2019-12-05T00:00:00.000Z",
          excerpt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
          humanTime: "05 Dec 2019",
          image: "https://placehold.co/800",
          path: "#",
        },
        {
          title: "Title Here",
          author: [
            {
              id: "id_name",
              image: "https://placehold.co/64x64",
              name: "Team member name",
              path: "#",
            },
          ],
          datetime: "2019-12-05T00:00:00.000Z",
          excerpt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
          humanTime: "05 Dec 2019",
          image: "https://placehold.co/800",
          path: "#",
        },
        {
          title: "Title Here",
          author: [
            {
              id: "id_name",
              image: "https://placehold.co/64x64",
              name: "Team member name",
              path: "#",
            },
          ],
          datetime: "2019-12-05T00:00:00.000Z",
          excerpt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
          humanTime: "05 Dec 2019",
          image: "https://placehold.co/800",
          path: "#",
        },
        {
          title: "Title Here",
          author: [
            {
              id: "id_name",
              image: "https://placehold.co/64x64",
              name: "Team member name",
              path: "#",
            },
          ],
          datetime: "2019-12-05T00:00:00.000Z",
          excerpt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
          humanTime: "05 Dec 2019",
          image: "https://placehold.co/800",
          path: "#",
        },
        {
          title: "Title Here",
          author: [
            {
              id: "id_name",
              image: "https://placehold.co/64x64",
              name: "Team member name",
              path: "#",
            },
          ],
          datetime: "2019-12-05T00:00:00.000Z",
          excerpt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto mollitia saepe ratione eos dolores commodi porro quos assumenda quis, veniam ab omnis distinctio, tempore laudantium, sapiente quidem? Corrupti, obcaecati.",
          humanTime: "05 Dec 2019",
          image: "https://placehold.co/800",
          path: "#",
        },
      ],
    };
  },
};
</script>
