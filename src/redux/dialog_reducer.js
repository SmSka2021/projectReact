import uniqid from "uniqid";

let initialState = {
 
  messages: [
    { idd: uniqid(), message: "Hello" },
    { idd: uniqid(), message: "How are your?" },
    { idd: uniqid(), message: "I am OK. And you?" },
    { idd: uniqid(), message: "Good" },
    { idd: uniqid(), message: "By" },
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