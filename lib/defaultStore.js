import storeGenerator from "./storeGenerator";

const initialValue = {
    defaultBoolean: false,
    defaultObj: {}
}

const DefaultStoreReducer = (state, {type, payload}) => {
    return {...state, [type]: payload};
};

const setDefaultBoolean = (dispatch) => {
    return defaultBoolean => {
        reportsUtils.defaultBoolean = defaultBoolean;
        dispatch({type: "defaultBoolean", payload: defaultBoolean});
    }
}

const setDefaultObj = (dispatch) => {
    return defaultObj => {
        reportsUtils.defaultObj = defaultObj;
        dispatch({type: "defaultObj", payload: defaultObj});
    }
}

export const defaultStoreUtils = {
    defaultBoolean: initialValue.defaultBoolean,
    defaultObj: initialValue.defaultObj
}

export const defaultStoreServices = {
    // relevant API service calls added here
}

export const {Context, Provider} = storeGenerator(
    DefaultStoreReducer,
    {
        // actions
        setDefaultBoolean,
        setDefaultObj
    }, {
        // state
        defaultBoolean: initialValue.defaultBoolean,
        defaultObj: initialValue.defaultObj
    }
)
