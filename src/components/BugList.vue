<template>
  <div class="bug-list row">
    <div class="col-7"></div>
    <table class="table table-hover">
      <thead>
        <tr class="table-primary">
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Date Created</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-secondary" v-for="bug in bugs" @click="openBug(bug._id)">
          <th scope="row">{{bug.title}}</th>
          <td>{{bug.creator}}</td>
          <td v-if="bug.closed == false">Active <i class="fas fa-book-open"></i></td>
          <td v-else-if="bug.closed == true">Closed <i class="far fa-times-circle"></i></td>
          <td>
            {{new Date(bug.createdAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import router from '@/router.js'
  export default {
    name: "BugList",
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getBugs')
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      openBug(id) {
        router.push({ name: 'BugDetails', params: { id } })
      }
    }
  }

</script>



<style>



</style>