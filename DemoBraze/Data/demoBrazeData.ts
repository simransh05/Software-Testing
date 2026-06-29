const url = {
    homePage: 'https://www.demoblaze.com/index.html'
}

const userInfo = {
    validSignupUser: {
        username: 'simrann',
        password: '123456'
    },
    invalidSignupUser: [
        {
            username: 'simrann',
            password: '123456',
            type: 'Exist User'
        },
        {
            username: '',
            password: '123456',
            type: 'empty field'
        },
        {
            username: 'simrann',
            password: '123456',
            type: 'empty field'
        },
    ],
    validLoginUser: {
        username: 'simrann',
        password: '123456'
    },
    invalidLoginUser: [
        {
            username: 'krt',
            password: '123456',
            type: 'Non existing'
        },
        {
            username: '',
            password: '123456',
            type: 'empty field'
        },
        {
            username: 'krt',
            password: '',
            type: 'empty field'
        },
    ]
}

const messages = {
    successSignup: 'Sign up successful.',
    existUserSignup: 'This user already exist.',
    fillFields: 'Please fill out Username and Password.',
    nonexistUserLogin: 'Wrong password.'
}

export { url, userInfo, messages };