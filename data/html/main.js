const app = new Vue({
    el: "#app",
    data: {
        bobby: {
            name: "Bobby",
            last: "Booen",
            age: 25
        },
        john: {
            name: "John",
            last: "Body",
            age: 35,
        }
    },
    computed: {
        johnAgeInOneYear() {
            return this.john.age + 1;
        }
    },
    filters: {
        ageInOneYear(age) {
            return age + 1;
        },
        fullName(value) {
            return `${value.last}, ${value.name}`
        }
    },
    template: `
      <div>
        <h2>Name: {{john | fullName}}</h2>
        <h2>Age: {{john.age | ageInOneYear}}</h2>
        <h2>Name: {{bobby | fullName}}</h2>
        <h2>Age: {{bobby.age | ageInOneYear}}</h2>
      </div>
    `
})