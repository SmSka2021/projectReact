import uniqid from "uniqid";

export let initialState =  {
  dialogs: [
    { idd: uniqid(), name: "Andron" },
    { idd: uniqid(), name: "Ann" },
    { idd: uniqid(), name: "Nicol" },
    { idd: uniqid(), name: "Serg" },
    { idd: uniqid(), name: "Oleg" },
  ],
  posts: [
  { idd: uniqid(), message: "Hello. My name is Anna" },
  { idd: uniqid(), message: "Hi. I am Toma" },
  { idd: uniqid(), message: "Ok. I from UN" },
],
newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let mess = { idd: uniqid(), message: state.newPostText };
      let stateCopy = {...state};
      stateCopy.posts=[...state.posts];
      stateCopy.posts.push(mess);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case "UPDATE-NEW-POST-CHANGE":
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;

    default:
      return state;
  }
};

export const addPostActionCreator =() =>({type: 'ADD-POST'});
export const updateNewPostTextActionCreator= (text)=> (
  {type: "UPDATE-NEW-POST-CHANGE", newText: text})


