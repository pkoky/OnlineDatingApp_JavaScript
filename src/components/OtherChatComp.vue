<template>
  <div>
    Other: {{getFullName}}
  </div>
  <div>
    msg: {{msg}}
  </div>
</template>

<script>

export default ({
  props: {
    user: Object,
    msg: String,
  },
  computed: {
    getFullName(){
      return this.user.name.first + " " + this.user.name.last
    }
  }
})
</script>
