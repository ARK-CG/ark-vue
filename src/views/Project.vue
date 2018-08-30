<template>
  <div class="project">
  <Data title="Project" path='project' />
</div>
</template>

<script>
import Data from "@/components/Data.vue";

export default {
  name: "Project",
  components: {
    Data
  },
  methods: {}
};
</script>

<style>
/*News*/
.project {
  background: #ecf0f1;
  width: 100%;
  padding-bottom: 100px;
}
</style>