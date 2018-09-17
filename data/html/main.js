const app = new Vue({
    el: "#app",
    data: {
      bobby: {
        name: "Bobby",
        last:"Booen",
        age: 25
      },
      john: {
        name: "John",
        last:"Body",
        age: 35,
      },
    },
    computed: {
        bobbyFullName() {
            return `${this.bobby.first} ${this.bobby.last}`
        },
        johnFullName() {
            return `${this.john.first} ${this.john.last}`
        }
    },
    template: `
      <div>
        <h2>Name: {{johnFullName}}</h2>
        <h2>Age: {{john.age}}</h2>
        <h2>Name: {{bobbyFullName}}</h2>
        <h2>Age: {{bobby.age}}</h2>
      </div>
    `
  })