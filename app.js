const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName:"",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //   name(value) {
    //     if(value === "") {
    //       return this.fullName = ""
    //     } else {
    //       return  this.fullName = value + " " + "Ferreira"
    //     }

    //   }
  },

  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },

  methods: {
    setFullName() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Ferreira";
      }
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
