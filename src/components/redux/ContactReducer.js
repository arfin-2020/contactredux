const initialState = [
    { id: 0, name: 'Arfin Chwodhury Arif', email: 'arfinchowdhuryarif7@gmail.com', phone: '01881036069' },
    { id: 1, name: 'Nayok Hero Alam', email: 'test70@gmail.com', phone: '01571115658'}
]

const ContactReducer = (state = initialState, action) => {
            switch(action.type){
                case "ADD_CONTACT":
                    state = [...state, action.payload]
                    return state;
                default: 
                return state;
            }
        
}

export default ContactReducer;