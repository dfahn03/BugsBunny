<template>
  <div class="col-7 note-list">
    <div class="card text-white bg-light mb-3" v-for="note in notes" :key="note._id">
      <div class="card-header">{{note.creator}}</div>
      <div class="card-body">
        <h6 class="card-title">{{note.flagged}}</h6>
        <p class="card-text">{{note.content}}</p>
        <ul class="nav nav-pills">
          <li class="nav-item dropdown show">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="true">Dropdown</a>
            <div class="dropdown-menu show" x-placement="bottom-start"
              style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
              <a class="dropdown-item">Pending</a>
              <a class="dropdown-item">Completed</a>
              <a class="dropdown-item">Rejected</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-footer text-muted">Created:
        {{new Date(note.createdAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "NoteList",
    data() {
      return {
        bug: this.id
      }
    },
    mounted() {
      this.$store.dispatch('getNotes')
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
  }

</script>


<style>

</style>