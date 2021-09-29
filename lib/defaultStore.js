import storeGenerator from "./storeGenerator";

const initialValue = {
    defaultValue: {}
}

const DefaultStoreReducer = (state, {type, payload}) => {
    return {...state, [type]: payload};
};

const setDefaultValue = (dispatch) => {
    return defaultValue => {
        // static value - available outside the React context
        defaultStoreUtils.defaultValue = defaultValue;
        // dispatch action - inform store with updated value
        dispatch({type: "defaultValue", payload: defaultValue});
    }
}

export const defaultStoreUtils = {
    defaultValue: initialValue.defaultValue
}

export const defaultStoreServices = {
    // relevant API service calls added here
}

export const {Context, Provider} = storeGenerator(
    DefaultStoreReducer,
    {
        // actions
        setDefaultValue
    }, {
        // state
        defaultValue: initialValue.defaultValue
    }
)
