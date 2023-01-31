// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        emails: [],
        apiLoaded: false,
      }
    },
    methods:{

    },
    mounted() {
    console.log(`the component is now mounted.`)

    for (let i = 1; i <= 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
          resp => {

            data = resp.data.response;
            this.emails.push(data)
            if (this.emails.length == 10) {
              this.apiLoaded = true;
            }
          });
      }
  }
  }).mount('#app')

