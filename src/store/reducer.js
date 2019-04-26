const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'ADD_PERSON': {
            const newPerson = {
                id: Math.random(), 
                name: action.name,
                age: action.age
            }
            const newArray = [...state.persons];
            newArray.push(newPerson);
            return {
                persons: newArray
            }
        }

        case 'DELETE_PERSON': {
            
            const newArray = state.persons.filter((result) => result.id !== action.id );
            return {
                persons: newArray
            }
        }


    }

    return state;
}

export default reducer;