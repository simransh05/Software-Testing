const data = {
    loginInfo: {
        validUser:
        {
            //pos 
            username: 'Admin',
            password: 'admin123',
            dataType: 'validCredentials'
        },
        invalidUser:
            [{
                // neg
                username: 'simran',
                password: 'admin123',
                dataType: 'invalidUsername'
            },
            {
                username: 'Admin',
                password: 'simran123',
                dataType: 'invalidPassword'
            },
            {
                username: '',
                password: 'admin123',
                dataType: 'emptyUsername'
            },
            {
                username: 'simran',
                password: '',
                dataType: 'emptyPassword'
            },
            {
                username: 'simran',
                password: 'simran123',
                dataType: 'bothInvalid'
            },
            {
                username: '',
                password: '',
                dataType: 'bothEmpty'
            }],
    }
}

const url = {
    loginPageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
}

export { data, url };