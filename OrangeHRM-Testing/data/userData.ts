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
            userRole: '',
            empName: '',
            status: '',
            username: '',
            password: '',
            confirmPass: ''
        },
        invalidUserInfo: [
            {
                userRole: '',
                empName: '',
                status: '',
                username: '',
                password: '',
                confirmPass: '',
                type: ''
            },
            {
                userRole: '',
                empName: '',
                status: '',
                username: '',
                password: '',
                confirmPass: '',
                type :''
            },
            {
                userRole: '',
                empName: '',
                status: '',
                username: '',
                password: '',
                confirmPass: '',
                type :'empty '
            },
        ]
    }
}

const url = {
    loginPageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
}


const msg = {
    toastMsg: 'No Records Found'
}

export { data, url, msg };