const initialState = {
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imgURL: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    desiredRent: 0,
    userId: 0,
    password: ''
}

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMGURL = 'UPDATE_IMGURL';
const UPDATE_LOAN_AMOUNT = 'UPDATE_LOAN_AMOUNT';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const UPDATE_USERID = 'UPDATE_USERID';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, { propertyname: action.payload });
        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state, { propertydescription: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMGURL:
            return Object.assign({}, state, { imgurl: action.payload });
        case UPDATE_LOAN_AMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload });
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload });
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: action.payload });
        case UPDATE_USERID:
            return Object.assign({}, state, { userId: action.payload });
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: action.payload });
        default:
            return state;
    }
}

export function updatePropertyName(propertyName) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}
export function updatePropertyDescription(propertyDescription) {
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescritpion
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state

    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateIMGURL(imgurl) {
    return {
        type: UPDATE_IMGURL,
        payload: imgurl
    }
}

export function updateLoanAmount(loanAmount) {
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}

export function updateMonthlyMortgage(monthlyMortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function updateDesiredRent(desiredRent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function updateUserId(userId) {
    return {
        type: UPDATE_USERID,
        payload: userId
    }
}

export function updatePassword(password){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export default reducer;