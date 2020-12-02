<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <Card :showtags=true
          v-for="edge in news.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
    <div class="pagination flex justify-center mb-8">
      <Pagination
        :baseUrl="baseurl"
        :currentPage="entries.pageInfo.currentPage"
        :totalPages="entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="entries.pageInfo.totalPages > 1"
      />
    </div>
  </Layout>
</template>


<script>
import Card from "./Card.vue";
import Pagination from "./Pagination"

export default {
    props: ["title", "onlyYear", "onlyMonth", "onlyTopic", "entries", "onlyOlderThan", "onlyLast"],

    components: {
        Card,
        Pagination
    },

    computed: {
        baseurl: function () {
          return "";
        },

        news() {
        var res = {}
        var old = this.entries
        res.totalCount = old.totalCount
        res.pageInfo = old.pageInfo
        res.edges = []

        for(var i=0; i < old.edges.length; i++){
            var node = old.edges[i].node;
            const diff =  Math.abs(new Date() - new Date(node.datetime))
            const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
            
            if(this.onlyLast){
                if(diffDays <= Number(this.onlyLast)){
                  res.edges.push({"node": node, "id": node.id})
                }
            }else if (this.onlyOlderThan){
                if(diffDays > Number(this.onlyOlderThan)){
                  res.edges.push({"node": node, "id": node.id})
                }
            }
        }
        console.log("dd")
        return res;
        }
    }
    };
</script>
