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
    case "UPDATE-NEW-MESSAGE-BODY":{
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.messNewText;
      return stateCopy;
    }
    case "SEND-MESSAGE":
      let newMes = { idd: uniqid(), message: state.newMessageBody };
      let stateCopy = {...state};
      stateCopy.newMessageBody = "";
      stateCopy.messages=[...state.messages];
      stateCopy.messages.push(newMes);
      return stateCopy;
    default:
      return state;
  }
};
export const sendMessageCreator = () =>({type:"SEND-MESSAGE"})
export const updateNewMessageBodyCreator = (body) =>({type:"UPDATE-NEW-MESSAGE-BODY", messNewText: body})