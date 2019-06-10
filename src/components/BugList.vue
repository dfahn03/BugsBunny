<template>
  <div class="bug-list row">
    <div class="col-11">
      <table class="table table-hover">
        <thead>
          <tr class="table-primary bg-title">
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
      <div>
        <ul class="pagination pagination-sm">
          <li class="page-item disabled">
            <a class="page-link" href="#">&laquo;</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    </div>
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
  .bg-title {
    background-color: #b8daff81;
  }
</style>