class Landing {
    dataBase = {}
    registerUser() {
        if (localStorage.getItem('userData') != null) {
            this.getData()
        }
        let firstName = username.value
        let email = exampleUserEmail.value
        let password = exampleUserPassword.value
        if (firstName !== '' && email !== '' && password !== '') {
            if (email in this.dataBase) {
                alert(`${email} already exists in database`)
            } else {
                this.dataBase[email] = {
                    name: firstName,
                    email: email,
                    password: password
                }
                this.saveData()
                alert('Registration successful')
                window.location = "home.html"
            }
        } else {
            alert('Please enter valid values')
        }
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem('userData'))
    }
    saveData() {
        localStorage.setItem('userData', JSON.stringify(this.dataBase))
    }
    login() {
        let loggedEmail = userEmail.value;
        let loggedPassword = userPassword.value;
        this.getData();
        if (loggedEmail == '' || loggedPassword == '') {
            alert('Please enter values')

        } else {
            if (loggedEmail in this.dataBase) {
                if (this.dataBase[loggedEmail].password === loggedPassword) {
                    localStorage.setItem('firstname', this.dataBase[loggedEmail].name)
                    window.location = "home.html"
                } else {
                    alert('password mismatch')
                }

            } else {
                alert(`The username ${loggedEmail} is not found`);
            }
        }
    }
}

const obj = new Landing()
