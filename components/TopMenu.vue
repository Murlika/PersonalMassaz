<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-lg-auto text-center">
      <template v-for="topMenuItem in topMenuItems">
        <li class="nav-item mr-lg-4" v-bind:class="{ active: topMenuItem.isCurrent }"  :key="topMenuItem.id">
          <a class="nav-link" :href="topMenuItem.link">{{topMenuItem.text}}
            <span class="sr-only" v-if="topMenuItem.isCurrent">(current)</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default{
    props: ['topMenuItems'],

    created() {
      console.log("topMenu created");
      //console.log(myStatistica);
    },
  }
</script>
