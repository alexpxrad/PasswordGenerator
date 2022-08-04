function getPassword() {
    const chars = 
    "@#$%^&*()_+><:{}[]'abcdefghijklmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++ ) {
        let randomNumber = Math.floor(Math.random()
       * chars.length );
       
        password += chars.substring(randomNumber, randomNumber + 1);
        console.log(password);
    }
    document.getElementById('password').value =
    password;
}

