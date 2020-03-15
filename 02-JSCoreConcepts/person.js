class Person {
    constructor(name, surname) {
        this.name = firstAsUpper(name);
        this.surname = firstAsUpper(surname);

        function firstAsUpper(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    getName() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInitials() {
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}`
    }
}

const janN = new Person("jan", "nowak");
const mikM = new Person("Mikolaj", "Mederski");

console.log(janN.getName());
console.log(janN.getInitials());

console.log(mikM.getName());
console.log(mikM.getInitials()); 
