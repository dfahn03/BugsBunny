<template>
  <div class="home container text-white">
    <div class="row">
      <div class="col mb-5 mt-2">
        <h1><strong>Bugs</strong></h1>
      </div>
    </div>
    <div class="row" v-show="showForm">
      <bug-form />
    </div>
    <div class="col-12 mb-5">
      <button class="btn btn-success" @click="showForm = !showForm">Add Bug</button>
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
</style>