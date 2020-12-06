<template>
  <Layout>
    <FilterHeader />
    <br/><br/><br/>
    <a v-on:click="toggleListArchive" href="#">Archive</a>

    <div class="container sm:pxi-0 mx-auto overflow-hidden">
      <div class="flex flex-wrap with-large pt-12 mt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="edge in news.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
    <div class="pagination flex justify-center mb-8">
      <Pagination
        :baseUrl="baseurl"
        :currentPage="$page.entries.pageInfo.currentPage"
        :totalPages="$page.entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.entries.pageInfo.totalPages > 1"
      />
    </div>
  </Layout>
</template>

<page-query>

query{

  entries: allNews(sortBy: "created", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        tags{
          id
          title
          path
        }
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
      }
    }
  }

  topics:  allNewsTag{
    edges{
      node{
				title        
      }
    }
  }
}

</page-query>

<script>
import FilterHeader from "~/components/custom/FilterHeader.vue";
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  data(){
    const allMonths = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currYear = new Date().getFullYear()
    
    return {
      selectedTopic: "All",
      selectedYear: String(new Date().getFullYear()),
      selectedMonth: "All",
      months: allMonths,
      years: ["All", String(currYear), String(currYear - 1)],
      listArchive: false
    }
  },

  metaInfo: {
    title: "Home",
  },
  components: {
    PostListItem,
    Pagination,
    FilterHeader,
  },
  methods:{
    setTopic: function(topic){
      this.selectedTopic = topic
    },
    setYear: function(year){
      this.selectedYear = year
    },

    setMonth: function(month){
      this.selectedMonth = month
    },

    toggleListArchive(){
      if(this.listArchive)
        this.listArchive = false
      else
        this.listArchive = true
    }
  },
  computed: {
    topics: function(){
        var res = ['All']
        this.$page.topics.edges.forEach(edge => res.push(edge.node.title));
        return res
    },

    baseurl: function () {
      return "";
    },

    news() {
      var res = {};
      var old = this.$page.entries;
      res.totalCount = old.totalCount;
      res.pageInfo = old.pageInfo;
      res.edges = [];

      for (var i = 0; i < old.edges.length; i++) {
        var node = old.edges[i].node;
        var nodeDate = new Date(node.datetime)
        const diff = Math.abs(new Date() - nodeDate);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        var selected = false
        
        if (!this.listArchive && diffDays <= 30) {
          selected = true
        }else if(this.listArchive && diffDays > 30){
          selected = true
        }

        if(!selected)
          continue

        // Now check topic
        var topics = ["All"]
        node.tags.forEach(tag => topics.push(tag.title));
        
        if(!topics.includes(this.selectedTopic))
          continue

        // Check year
        var years = ["All", String(nodeDate.getFullYear())]
        if(!years.includes(this.selectedYear))
          continue

        
        // Check Month
        var months = ["All", this.months[nodeDate.getMonth()+1]]
        
        if(!months.includes(this.selectedMonth))
          continue
        res.edges.push({ node: node, id: node.id });
      }
      return res;
    },
  },
};
</script>
