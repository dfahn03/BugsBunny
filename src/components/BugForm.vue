<template>
  <div class="col-12 bug-form d-flex justify-content-center align-items-center">
    <form @submit.prevent="createBug">
      <div class="form-group">
        <input class="form-control form-control-sm m-1" type="text" placeholder="Title" v-model="title">
        <input class="form-control form-control-sm m-1" type="text" placeholder="Reported By" v-model="creator">
        <input class="form-control form-control-lg m-1" type="text" placeholder="Description" v-model="description">
        <button type="submit" class="btn btn-primary mt-1 mb-2">Eh, what's up, doc?</button>
      </div>
    </form>
  </div>
</template>



<script>

  export default {
    name: "BugForm",
    data() {
      return {
        title: "",
        creator: "",
        description: ""
      }
    },
    methods: {
      createBug() {
        let newBug = {
          title: this.title,
          creator: this.creator,
          description: this.description
        };
        this.$store.dispatch('createBug', newBug)
        this.title = "",
          this.creator = "",
          this.description = ""
      }
    }
  }


</script>


<style scoped>
  form {
    min-width: 50vw;
  }
</style>