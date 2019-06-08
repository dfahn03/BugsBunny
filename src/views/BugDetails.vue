<template>
  <div class="row bug-details">
    <div class="col-12 mt-5">
      <h1 class="text-white">Bug Details</h1>
    </div>
    <div class="col-12 mt-5">
      <div class="card text-center">
        <!-- v bind inputs  -->
        <td class="card-header" v-if="bug.closed == false">Active <i class="fas fa-book-open"></i></td>
        <td class="card-header" v-else-if="bug.closed == true">Closed <i class="far fa-times-circle"></i></td>
        <div class="card-header">@{{bug.creator}}</div>
        <div class="card-body" id="bug-card">
          <h5 class="card-title">{{bug.title}}</h5>
          <p class="card-text">{{bug.description}}</p>
          <button class="btn btn-danger m-2">Close Bug</button>
          <button class="btn btn-warning">Edit Bug</button>
        </div>
        <div class="card-footer text-muted">Created:
          {{new Date(bug.createdAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.id)
      //add get notes
    },
    data() {
      return {}
    },
    computed: {
      bug() {
        return this.$store.state.bug
      }
    },
    methods: {
      editBug() {

      }
    },
    createNote() {

    }

  }


</script>


<style>
  /* #bug-card {
    background-color: rgba(255, 255, 255, 0.5);
  } */
</style>