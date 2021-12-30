<template>
  <div class="flex justify-start">
    <div class="flex flex-col">
      <div>
        Other: {{getFullName}}
      </div>
      <div>
        msg: {{msg}}
      </div>
    </div>
  </div>
  <div>
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
