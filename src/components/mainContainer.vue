<template>
  <div class="main-container">

    <h2>{{ sectionTitle }}</h2>

    <div class="projects-container">

      <div v-for="(project, index) in projectsData" :key="index">

        <project :projectData="project">
        </project>

      </div>
    </div>
  </div>
</template>

<script>
import projects from '../data/projectsData';
import project from './charityProject';

export default {
  name: 'main-container',

  data() {
    return {
      sectionTitle: 'Charity projects raising donations now:',
      projectsData: projects.projectsData,
    };
  },

  components: {
    project,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 60px 40px;
}


h2 {
  margin-top: 0;
  font-size: 36px;
  display: block;
  text-align: left;
  width: 1200px;
  padding-bottom: 30px;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

h2 {
  margin: 0;
  letter-spacing: 6px;
}

.projects-container {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
</style>
