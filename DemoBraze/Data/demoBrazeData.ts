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
            password: '',
            type: 'empty field'
        },
    ],
    validLoginUser: {
        username: 'kirtii',
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

const orderInfo = {
    validInfo: {
        name: 's',
        country: 's',
        city: 's',
        creditCard: 's',
        month: 's',
        year: 's'
    },
    invalidInfo: [
        {
            name: '',
            country: 's',
            city: 's',
            creditCard: 's',
            month: 's',
            year: 's',
            type: 'Missing Field'
        },
        {
            name: 's',
            country: 's',
            city: 's',
            creditCard: '',
            month: 's',
            year: 's',
            type: 'Missing Field'
        },
    ]
}

const messages = {
    successSignup: 'Sign up successful.',
    existUserSignup: 'This user already exist.',
    fillFields: 'Please fill out Username and Password.',
    nonexistUserLogin: 'Wrong password.',
    addToCart: 'Product added.',
    requiredFields: 'Please fill out Name and Creditcard.'
}

export { url, userInfo, messages, orderInfo };