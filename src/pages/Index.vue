<template>
  <Layout>

    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Vacation Card component</h1>

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <VacationCard
        img="/vacationcard/garden.jpg"
        imgAlt=""
        eyebrow=""
        title="Hey"
        pricing=""
        url=""
      />
    </div> -->

    <!-- <BrandPanelWithAppScreenshot
      title="Ready to dive in?"
      title2="Start your free trial today."
      content="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec."
      url="#"
      btnTxt="Sign up for free"
      img="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
      imgAlt="App screenshot"
    /> -->

    <!-- <NextEvent
      title1="Online"
      subtitle1="Ocean Protocol v3 Launch | Webinar"
      date="October 29, 2020"
    /> -->

    <!-- <HomeCard
      header="HOW IT WORKS"
      subtitle="The Threefold Grid and decentralized capacity can benifit everyone on the planet."
      link_text="LEARN MORE"
      img="https://via.placeholder.com/300"
    /> -->

    <!-- <NewPeoplePage
      :filters="['all', 'custom1', 'custom2']"
      :people="[
        {
          name: 'Hamdy',
          title: 'Software engineer',
          imgAlt: 'AyHaga',
          id: '1',
          img: 'https://via.placeholder.com/300',
        },
      ]"
    /> -->

    <!-- <BlogOverview
      :blogs="[
        {
          image: '/blog/ball.jpg',
          imgAlt: 'Threebot with ball',
          url: '#',
          title: 'De-centralized like a boss',
          description:
            'This blog will teach you everything to be completely digitally free and sovereign',
        },
        {
          image: '/blog/ball.jpg',
          imgAlt: 'Threebot with ball',
          url: '#',
          title: 'Loving the new website',
          description:
            'Here we express our love for the new website and the completely decentralized development process',
        },
        {
          image: '/blog/ball.jpg',
          imgAlt: 'What a day',
          url: '#',
          title: 'What a day!',
          description:
            'Don\'t you also have that feeling sometimes? So many things happening, so little time to comprehend it all. Read more in this blog..',
        },
        {
          image: '/blog/ball.jpg',
          imgAlt: 'Let\'s play and be grateful',
          url: '#',
          title: 'Let\'s play and be grateful',
          description: 'That is all we ever need',
        },
      ]"
    /> -->
    
    <Header
        v-for="header in headers"
        :key="header.title"
        :header="header"
      />

    <NewCard v-for="card in cards" :key="card.title"
      :card = "card"
    />

  </Layout>
</template>

<script>
import VacationCard from "~/components/vacationcard/VacationCard.vue";
import HomeCard from "~/components/marketing/sections/cta-sections/home_card.vue";
import BrandPanelWithAppScreenshot from "~/components/marketing/sections/cta-sections/brand_panel_with_app_screenshot.vue";
import NextEvent from "~/components/marketing/sections/cta-sections/next_event.vue";
import NewPeoplePage from "~/components/marketing/sections/cta-sections/new_people_page.vue";
// import BlogOverview from "~/components/blog/BlogOverview.vue";
import Footer from "~/components/marketing/sections/cta-sections/Footer.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";


export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    VacationCard,
    BrandPanelWithAppScreenshot,
    NextEvent,
    HomeCard,
    NewPeoplePage,
    // BlogOverview,
    Footer,
    NewCard,
    Header,
  },
  data() {
    return {
      cards : [
        {
        title : "Build Your New Idea",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.",
        image : "background-image:url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')",
        button :"Start Now",
        link :"#"
        }
      ],
      headers: [
        {
          title: "THANK YOU THREEFOLD MEMBERS",
          img: "https://placehold.co/600x300",
          altImg :"home",
          content:"Welcome to the growing ecosystem of ThreeFold.",
        },
      ],
      footerLinks: [
        {
          title: "solutions",
          links: [
            { name: "Marketing", link: "#" },
            { name: "Marketing2", link: "#" },
            { name: "Marketing3", link: "#" },
            { name: "Marketing4", link: "#" },
          ],
        },
        {
          title: "Support",
          links: [
            { name: "Marketing", link: "#" },
            { name: "Marketing2", link: "#" },
            { name: "Marketing3", link: "#" },
            { name: "Marketing4", link: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "Marketing", link: "#" },
            { name: "Marketing2", link: "#" },
            { name: "Marketing3", link: "#" },
            { name: "Marketing4", link: "#" },
          ],
        },
        {
          title: "Legal",
          links: [
            { name: "Marketing7", link: "#" },
            { name: "Marketing8", link: "#" },
            { name: "Marketing9", link: "#" },
            { name: "Marketing4", link: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
