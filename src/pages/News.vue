<template>
  <Layout>
    <NewsFilterHeader v-if="listArchive"
      @selectedTopic="setTopic"
      @selectedYear="setYear"
      @selectedMonth="setMonth"
      @resetAll="resetAll"
      :topics="topics"
      :years="years"
      :months="months"
    />
     <div class="flex mt-16">
      <a
        @click="toggleListArchive();toggleArchiveButtonText()"
        href="#"
        class="ml-auto bg-gray-900 hover:bg-gray-700 text-gray-100 px-5 py-2 font-semibold rounded"
      >
        {{archiveButtonText}}</a
      >
    </div>

    <div class="container sm:pxi-0 mx-auto overflow-hidden">
      <div class="flex flex-wrap news pt-12 mt-8 pb-8 mx-4 sm:-mx-4">
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
import NewsFilterHeader from "~/components/custom/NewsFilterHeader.vue";
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  data() {
    const allMonths = [
      "All",
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
    var years = ["All"]
    var r  = this.range(2019, currYear)
    r.forEach((year) => years.push(String(year)));

    return {
      selectedTopic: "All",
      selectedYear: "All",
      selectedMonth: "All",
      months: allMonths,
      years:  years,
      listArchive: false,
      archiveButtonText : "Archive"
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
      this.selectedTopic = "All";
      this.selectedYear = "All";
      this.selectedMonth = "All";
    },
    toggleListArchive() {
      if (this.listArchive) {
        this.listArchive = false;
      } else {
        this.listArchive = true;
      }
    },

    toggleArchiveButtonText() {
      if (this.archiveButtonText == "Archive") {
        this.archiveButtonText = "News";
        this.resetAll()
      } else {
        this.archiveButtonText = "Archive"
      }
    },
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

    }


  },
  computed: {
    topics: function () {
      var res = ["All"];
      this.$page.topics.edges.forEach((edge) => res.push(edge.node.title));
      return res;
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
        var nodeDate = new Date(node.datetime);
        const diff = Math.abs(new Date() - nodeDate);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        var selected = false;

        if (!this.listArchive && diffDays <= 30) {
          selected = true;
        } else if (this.listArchive && diffDays > 30) {
          selected = true;
        }

        if (!selected) continue;

        // Now check topic
        var topics = ["All"];
        node.tags.forEach((tag) => topics.push(tag.title));

        if (!topics.includes(this.selectedTopic)) continue;

        // Check year
        var years = ["All", String(nodeDate.getFullYear())];
        if (!years.includes(this.selectedYear)) continue;

        // Check Month
        var months = ["All", this.months[nodeDate.getMonth() + 1]];

        if (!months.includes(this.selectedMonth)) continue;
        res.edges.push({ node: node, id: node.id });
      }
      return res;
    },
  },
};
</script>

