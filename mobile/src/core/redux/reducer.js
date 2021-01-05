import * as MyAction from './action.types'

function myReducer(state = {}, action){
    
    switch (action.type) {
        case MyAction.CategorySelected:
            return {...state, category: action.payload};
        case MyAction.ServiceSelected:
            return {...state, service: action.payload};
        case MyAction.CompanyService:
            return {...state, company: action.payload};
        case MyAction.SecurityUser:
            return {...state, security: action.payload};
        case MyAction.VerifyUser:
            return {...state, verify: action.payload};
        case MyAction.AllCard:
            return {...state, cards: action.payload};
        case MyAction.DetailCard:
            return {...state, detailCard: action.payload};
        case MyAction.ConfirmPayment:
                return {...state, confirmPayment: action.payload};
        case MyAction.PickerCardSelected:
                    return {...state, cardSelected: action.payload};
        default:
            return state
    }
}

export default myReducer