<template>
  <div>
    <div class="container-fluid">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="6" aria-valuemin="0" aria-valuemax="10"
             :style="{width: notes.length + '0%'}">
              {{notes.length + '0%'}}
        </div>
      </div>
    </div>
    <h3>Click on any created notes to delete them</h3>
    <input v-model="newNote" type="text"> <br>
    <button @click="addNote" class="btn btn-primary">Add</button>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        newNote: ''
      };
    },
    props: ['notes', 'maxNotes'],
    methods: {
      addNote(){
        if(this.notes.length != this.maxNotes)
          this.notes.push(this.newNote);
        else
          alert("Max Notes")

      }
    }
  }
</script>

<style scoped>
  button{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 200px;
  }
</style>
