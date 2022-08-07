<!-- eslint-disable quotes -->
<template>
  <div>
    <h1>Hospitals list</h1>
  </div>
</template>

<script>
import hospset from '@/api/hospset'
export default {
  data() {
    return {
      cur: 1,
      limit: 3,
      hospObj: {},
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      hospset
        .getAllList()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
// eslint-disable-next-line eol-last
</script>