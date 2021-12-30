<template>
  <h1>{{ getFullName() }}</h1>
  <h1>{{ msg }}</h1>
</template>

<script>
export default ({
  props: {
    user: Object,
    msg: String,
  },
  methods: {
    getFullName(){
      return this.user.name.first + " " + this.user.name.last;
    }
  }
})
</script>
