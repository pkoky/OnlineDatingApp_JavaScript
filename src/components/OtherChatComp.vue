<template>
  <div class="flex justify-start">
    <router-link :to="{name: 'User', params: {userId: `${user.login.uuid}`}}">
      <img :src="user.picture.thumbnail" alt="">
    </router-link>
    <div class="flex flex-col">
      <div>
        {{getFullName}}
      </div>
      <div class="">
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
