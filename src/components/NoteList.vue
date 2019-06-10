<template>
  <div class="col note-list">
    <table class="table table-hover">
      <thead>
        <tr class="table-primary bg-title">
          <th scope="col">Created By</th>
          <th scope="col">Note</th>
          <th scope="col">Status</th>
          <th scope="col">Date Created</th>
          <th scope="col">Date Updated</th>
          <th scope="col">Change Status</th>

        </tr>
      </thead>
      <tbody>
        <tr class="table-secondary" v-for="note in notes" :key="note._id">
          <td>{{note.creator}}</td>
          <td>{{note.content}}</td>
          <td v-if="note.flagged == 'pending'">Pending</i></td>
          <td v-else-if="note.flagged == 'completed'">Completed</i></td>
          <td v-else="note.flagged == 'rejected'">Rejected</i></td>
          <td>
            {{new Date(note.createdAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
          </td>
          <td>
            {{new Date(note.updatedAt).toLocaleDateString('en-US', {year: 'numeric', day: 'numeric', month: 'short'})}}
          </td>
          <td class="d-flex">
            <button class="btn btn-success btn-small" @click="editNote">Completed</button>
            <button class="btn btn-danger btn-small ml-1" @click="deleteNote(note._id)">Rejected</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: "NoteList",
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getNotes')
    },
    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.bug
      }
    },
    methods: {
      deleteNote(id) {
        this.$store.dispatch('deleteNote', id)
      },
      editNote(note) {
        this.$store.dispatch('editNote', id)
      }
    }
  }

</script>


<style>

</style>


<!-- <div class="card text-white bg-light mb-3" v-for="note in notes" :key="note._id">
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
    </div> -->