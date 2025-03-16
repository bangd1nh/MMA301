import { View, Text } from "react-native";
import React, { useReducer, useState } from "react";
import ListUser from "../component/ListUser";
import UserForm from "../component/UserForm";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return [
                ...state,
                {
                    id: action.id,
                    userName: action.userName,
                    email: action.email,
                    password: action.password,
                },
            ];
        }
        case "DELETE_USER": {
            return state.filter((user) => user.id !== action.id);
        }
        case "EDIT_USER": {
            return state.map((user) =>
                user.id === action.id
                    ? {
                          ...user,
                          userName: action.userName,
                          email: action.email,
                          password: action.password,
                      }
                    : user
            );
        }
        default: {
            console.log("sai state");
            return state;
        }
    }
};

const initialState = [
    { id: 1, userName: "Charlie", email: "charlie@mail.com", password: "1234" },
    {
        id: 2,
        userName: "Charlie1",
        email: "charlie1@mail.com",
        password: "1234",
    },
    {
        id: 3,
        userName: "Charlie2",
        email: "charlie2@mail.com",
        password: "1234",
    },
];

const UserManagement = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isEdit, setIsEdit] = useState({});

    const handleUserFormCallBack = (data) => {
        console.log(data);
        dispatch(data);
    };
    const handleListUserCallBack = (data) => {
        console.log(data);
        if (data.type === "EDIT_USER") {
            setIsEdit(data);
        }
        if (data.type === "DELETE_USER") {
            dispatch(data);
        }
    };

    const handleCallBackEdit = (data) => {
        dispatch(data);
    };

    return (
        <View>
            <UserForm
                callback={handleUserFormCallBack}
                isEdit={isEdit}
                callbackEdit={handleCallBackEdit}
            />
            <ListUser data={state} callback={handleListUserCallBack} />
        </View>
    );
};

export default UserManagement;
