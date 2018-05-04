<template>
  <div class="container-fluid">
    <div class="page-header">
      <h2>Note taker! Use the textbox to add notes</h2>
    </div>
    <app-add-note :notes="notes" :maxNotes="maxNotes"></app-add-note>
    <app-display-note :notes="notes" @deleteIndex="deleteNote($event)" ></app-display-note>

  </div>

</template>
<script>
  import DisplayNotes from './DisplayNotes.vue'
  import AddNote from './AddNote.vue'
  export default {
    components: {
      'app-display-note': DisplayNotes,
      'app-add-note': AddNote
    },
    data: function(){
      return {
        notes: ["First note haha","lalala","tratratra"],
        maxNotes: 10
      };
    },
    methods:{
      deleteNote(index){
        this.notes.splice(index,1);
      }
    }
  }
</script>
