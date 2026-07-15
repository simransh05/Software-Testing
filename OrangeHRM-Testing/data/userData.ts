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
    },
    AddUser: {
        validUserInfo: {
            empName: 'kirti sharma',
            username: 'kirtiSharma',
            password: 'Aa@12345@',
            confirmPass: 'Aa@12345@'
        },
        invalidUserInfo: [
            {
                empName: '',
                username: '',
                password: '',
                confirmPass: '',
                type: ''
            },
            {
                empName: '',
                username: '',
                password: '',
                confirmPass: '',
                type: ''
            },
            {
                empName: '',
                username: '',
                password: '',
                confirmPass: '',
                type: 'empty '
            },
        ]
    }
}

const url = {
    loginPageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    payGrades: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades'
}


const msg = {
    toastMsg: 'No Records Found'
}

export { data, url, msg };