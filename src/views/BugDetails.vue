<template>
  <div class="container bug-details">
    <div id="nav" v-if="bug.closed == true">
      <router-link to="/">Home</router-link>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <h1 class="text-white">Bug Details</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">
        <div class="card text-center">
          <!-- v bind inputs  -->
          <td class="card-header" v-if="bug.closed == false">Active <i class="fas fa-book-open"></i></td>
          <td class="card-header" v-else-if="bug.closed == true">Closed <i class="far fa-times-circle"></i></td>
          <div class="card-header">@{{bug.creator}}</div>
          <div class="card-body">
            <h5 class="card-title">{{bug.title}}</h5>
            <p class="card-text">{{bug.description}}</p>
            <button class="btn btn-danger m-2" @click="closeBug(bug)" :disabled="bug.closed">Close <img
                src="../assets/carrot-1.png" alt="Carrot"></button>
            <!-- <button class="btn btn-warning">Edit <img src="../assets/carrot-1.png" alt="Carrot"></button> -->
          </div>
          <div class="card-footer text-muted">Created:
            {{new Date(bug.createdAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-show="showForm">
      <note-form />
    </div>
    <div class="row">
      <div class="col-12 mt-3 mb-3 d-flex justify-content-center align-items-center" v-show="bug.closed == false">
        <button class="btn btn-success" @click="showForm = !showForm" v-if="showForm == false"
          :disabled="bug.closed">Add <i class="far fa-comment"></i></button>
        <button class="btn btn-success" @click="showForm = !showForm" v-else-if="showForm == true">Cancel <i
            class="far fa-comment"></i></button>
      </div>
    </div>
    <div class="row">
      <note-list />
    </div>
  </div>
</template>

<script>
  import NoteForm from '@/components/NoteForm.vue'
  import NoteList from '@/components/NoteList.vue'

  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.$route.params.id)
      this.$store.dispatch('getNotes', this.$route.params.id)
    },
    data() {
      return {
        showForm: false
      }
    },
    components: {
      NoteList,
      NoteForm
    },
    computed: {
      bug() {
        return this.$store.state.bug
      },
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      closeBug(bug) {
        this.$store.dispatch('closeBug', bug)
      }
    }
  }
</script>


<style scoped>
  #nav {
    font-size: 30px;
  }

  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 5px;
  }
</style>