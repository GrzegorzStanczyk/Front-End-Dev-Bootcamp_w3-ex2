function Person(firstName, lastName) {

    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.attempts = 0;

}

Person.prototype.flirt = function() {
    // Zapis ES6 arrow function, nie ma problemu z this kierującym na obiekt window. Pobiera this z przed zakresu funkcji.
    this.interval = setInterval(() => {

        console.log("Cześć, nazywam się " + this.firstName + " " + this.lastName + "! Masz ochotę na drinka?");

        if(++this.attempts === 10) {
            clearInterval(this.interval);
        }

    }, 1000);

};

var person = new Person("Jan", "Kowalski");

person.flirt();
