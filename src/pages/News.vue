<template>
  <Layout>
    <NewsFilterHeader
      @selectedTopic="setTopic"
      @selectedYear="setYear"
      @selectedMonth="setMonth"
      @resetAll="resetAll"
      :topics="topics"
      :years="years"
      :months="months"
    />

    <div
      class="container sm:pxi-0 mx-auto overflow-hidden"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <div class="flex flex-wrap news pt-12 mt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="edge in news.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div class="text-center" v-if="news.edges.length == 0">
        <h2 class="inlibe-flex mx-auto text-gray-700 w-3/4">No results</h2>
      </div>
    </div>
    <div class="pagination flex justify-center mb-8">
      <Pagination
        :baseUrl="baseurl"
        :currentPage="$page.entries.pageInfo.currentPage"
        :totalPages="$page.entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.entries.pageInfo.totalPages > 1 && news.edges.length > 0"
      />
    </div>
  </Layout>
</template>

<page-query>
query($page: Int){
  entries: allNews(perPage: 10, page: $page, sortBy: "created", order: DESC, filter: {category: { id: {in: ["farming"]}}}) @paginate{
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
        category{
          id
          title
        }
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
import NewsFilterHeader from "~/components/custom/NewsFilterHeader.vue";
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  data() {
    const allMonths = [
      "All Months",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currYear = new Date().getFullYear();
    var years = ["All Years"];
    var r = this.range(2019, currYear);
    r.forEach((year) => years.push(String(year)));

    return {
      selectedTopic: "All Topics",
      selectedYear: "All Years",
      selectedMonth: "All Months",
      months: allMonths,
      years: years,
      listArchive: false,
      archiveButtonText: "Archive",
    };
  },

  metaInfo: {
    title: "Newsroom",
  },
  components: {
    PostListItem,
    Pagination,
    NewsFilterHeader,
  },
  methods: {
    setTopic: function (topic) {
      this.selectedTopic = topic;
    },
    setYear(year) {
      this.selectedYear = year;
    },
    setMonth(month) {
      this.selectedMonth = month;
    },
    resetAll() {
      this.selectedTopic = "All Topics";
      this.selectedYear = "All Years";
      this.selectedMonth = "All Months";
    },
    toggleListArchive() {
      if (this.listArchive) {
        this.listArchive = false;
      } else {
        this.listArchive = true;
      }
    },

    // toggleArchiveButtonText() {
    //   if (this.archiveButtonText == "Archive") {
    //     this.archiveButtonText = "News";
    //     this.resetAll()
    //   } else {
    //     this.archiveButtonText = "Archive"
    //   }
    // },
    range(start, end, step) {
      var range = [];
      var typeofStart = typeof start;
      var typeofEnd = typeof end;

      if (step === 0) {
        throw TypeError("Step cannot be zero.");
      }

      if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
      } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
      }

      typeof step == "undefined" && (step = 1);

      if (end < start) {
        step = -step;
      }

      if (typeofStart == "number") {
        while (step > 0 ? end >= start : end <= start) {
          range.push(start);
          start += step;
        }
      } else if (typeofStart == "string") {
        if (start.length != 1 || end.length != 1) {
          throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
          range.push(String.fromCharCode(start));
          start += step;
        }
      } else {
        throw TypeError("Only string and number types are supported");
      }

      return range;
    },
  },
  computed: {
    topics: function () {
      var res = ["All Topics"];
      this.$page.topics.edges.forEach((edge) => res.push(edge.node.title));
      return res;
    },

    baseurl: function () {
      return "/news/";
    },

    news() {
      var res = {};
      var old = this.$page.entries;
      res.totalCount = old.totalCount;
      res.pageInfo = old.pageInfo;
      res.edges = [];

      for (var i = 0; i < old.edges.length; i++) {
        var node = old.edges[i].node;
        var nodeDate = new Date(node.datetime);
        const diff = Math.abs(new Date() - nodeDate);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        var selected = false;

        // if (!this.listArchive && diffDays <= 180) {
        //   selected = true;
        // } else if (this.listArchive && diffDays > 180) {
        //   selected = true;
        // }

        // if (!selected) continue;

        // Now check topic
        var topics = ["All Topics"];
        node.tags.forEach((tag) => topics.push(tag.title));

        if (!topics.includes(this.selectedTopic)) continue;

        // Check year
        var years = ["All Years", String(nodeDate.getFullYear())];
        if (!years.includes(this.selectedYear)) continue;

        // Check Month
        var months = ["All Months", this.months[nodeDate.getMonth() + 1]];

        if (!months.includes(this.selectedMonth)) continue;
        res.edges.push({ node: node, id: node.id });
      }
      return res;
    },
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 570;
      }
    },
  },
};
</script>

