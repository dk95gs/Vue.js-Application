<template>
  <div class="row container-fluid">
    <app-note v-for="(note, index) in notes" @click.native="deleteNote(index)">
      <p>{{note}}</p>
    </app-note>
  </div>
</template>

<script>

  import Note from './Note.vue'
  export default {
    components: {
      'app-note': Note
    },
    props:['notes'],
    methods:{
      deleteNote(index){
        this.$emit("deleteIndex", index);
      }
    }
  }
</script>

<style>

</style>
