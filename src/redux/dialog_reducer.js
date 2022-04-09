import uniqid from "uniqid";

let initialState = {
 
  messages: [
    { idd: uniqid(), message: "Борщ московский" },
    { idd: uniqid(), message: "Котлеты по-киевски" },
    { idd: uniqid(), message: "Картофель отварной" },
    { idd: uniqid(), message: "Мусс вишневый" },
    { idd: uniqid(), message: "Салат Цезарь" },
  ],
 newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
     return {
...state,
newMessageBody: action.messNewText,
};  
           
    case "SEND-MESSAGE":
      let newMes = { idd: uniqid(), message: state.newMessageBody };
    return {...state,  
 newMessageBody: "",
 messages: [...state.messages, newMes ],

};
     
        
    default:
      return state;
  }
};
export const sendMessageCreator = () =>({type:"SEND-MESSAGE"})
export const updateNewMessageBodyCreator = (body) =>({type:"UPDATE-NEW-MESSAGE-BODY", messNewText: body})