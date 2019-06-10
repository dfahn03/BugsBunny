<template>
  <div class="col-12 note-form d-flex justify-content-center align-items-center">
    <form @submit="createNote">
      <div class="form-group">
        <input class="form-control form-control-sm m-1" type="text" placeholder="Who Might You Be?" v-model="creator">
        <input class="form-control form-control-lg m-1" type="text" placeholder="Note" v-model="content">
        <button type="submit" class="btn btn-primary mt-1 mb-2">Eh, what's up, doc?</button>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    name: "NoteForm",
    data() {
      return {
        creator: "",
        content: "",
        flagged: "pending",
        bug: this.$route.params.id
      }
    },
    methods: {
      createNote() {
        let newNote = {
          creator: this.creator,
          content: this.content,
          flagged: "pending",
          bug: this.$route.params.id
        };
        this.$store.dispatch('createNote', newNote)
        this.creator = "",
          this.content = ""
      }
    }
  }
</script>