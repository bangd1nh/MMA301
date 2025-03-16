export const initialState = [
    {
        email: "dinhbang121@gmail.com",
        password: "123456",
        name: "bang",
    },
    {
        email: "dinhbang@gmail.com",
        password: "1234",
        name: "bnag2",
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEWUSER":
            return state.push(action.user);
        case "REMOVE_USER":
            return state.filter((user) => user.email !== action.email);
        case "EDIT_USER":
            return state.forEach((element) => {
                if (element.email == action.user.email) {
                    element.name = action.user.name;
                    element.email = action.user.email;
                    element.password = action.user.password;
                }
            });
        default:
            return state;
    }
};
