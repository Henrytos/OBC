class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        return this.password == password && this.email == email
    }
}

const person = new User('henry franz ramos arcaya', 'franzhenry46@gmail.com', 1234)

console.log(person)

console.log(person.login('franzhenry46@gmail.com', 1234))