const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
        }
    },

    mounted() {
        // console.log(axios);
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // console.log(response.data.response);
                    let randomEmail = response.data.response;
                    this.emailList.push(randomEmail);
                });
        }


    }
}).mount('#app')