const initialState = {
    books: [
        {
            id: 1,
            title: 'Test test test',
            author: 'Name name name'
        },
        {
            id: 2,
            title: 'Test test test 2',
            author: 'Name name name 2'
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
