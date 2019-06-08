<template>
  <div class="home container">
    <div class="row">
      <div class="col mb-5 mt-2">
        <h1 class="text-white"><strong>Bugs</strong></h1>
      </div>
    </div>
    <div class="row" v-show="showForm">
      <bug-form />
    </div>
    <div class="col-12 mb-5">
      <button class="btn btn-success" @click="showForm = !showForm" v-if="showForm == false">Add <img
          src="../assets/carrot-1.png" alt="Carrot"></button>
      <button class="btn btn-success" @click="showForm = !showForm" v-else-if="showForm == true">Cancel <img
          src="../assets/carrot-1.png" alt="Carrot"></button>
    </div>
    <div class="row">
      <div class="col-9 mt-2">
        <bug-list />
      </div>
    </div>

  </div>
</template>

<script>
  import BugList from '@/components/BugList.vue'
  import BugForm from '@/components/BugForm.vue'

  export default {
    name: 'home',
    data() {
      return {
        showForm: false
      }
    },
    mounted() {
      this.$store.dispatch('getBugs');
    },
    components: {
      BugList,
      BugForm
    },
    computed: {
      buglist() {
        return this.$store.state.bugs
      }
    },
    methods: {

    }
  }
</script>

<style>
  img {
    height: 1.8rem;
    width: 1.8rem;
    margin-left: 5px;
  }

  div {
    font-family: 'Righteous', cursive;
  }
</style>