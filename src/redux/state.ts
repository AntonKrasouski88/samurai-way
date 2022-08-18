export type MessagesType = {
    id: number;
    letter: string;
  }
  
export type DialogsType = {
    id: number;
    name: string;
  }
  
export type PostDataType = {
    message: string;
    like: number;
  }

export type ProfilePageType = {
    postData: Array<PostDataType>
  }

export type DialogsPageType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>
  }

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType
  }
  
let state: StateType =  {
      profilePage: {
          postData: [
              {message:"Hi, how are you?", like: 5},
              {message:"It's my first post", like: 10},
            ],
          
      },
      dialogsPage: {
          dialogs: [
              {id:1, name: "Dimcho"},
              {id:2, name: "Albert"},
              {id:3, name: "Tanya"},
              {id:4, name: "Ilan"},
            ],
          messages: [
              {id: 1, letter: "What's up bro"},
              {id: 2, letter: "How are your it-kamasutra?"},
              {id: 3, letter: "What do yuo do?"},
            ]
            
      },
  }
  
  export default state