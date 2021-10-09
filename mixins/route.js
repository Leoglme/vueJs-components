export  default  {
  computed: {
    currentRouteName(){
      return '/' + this.$route.path.split('/')[1]
    }
  }
}
