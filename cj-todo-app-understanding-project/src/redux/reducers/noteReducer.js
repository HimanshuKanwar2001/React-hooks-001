import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolo sit ahem kya haal hai bhai sab bhadiya ghar mai aur bta ",
      createdOn: new Date(),
    },
    {
      text: "zindigi saaravar dun itna hi bahar hun dhuniya hi badal du yahan chamatkar hun mai kisi ka sapna hun jho aaj tak chukaung ab ab yhe mera sapna hai ki sabke sapne pure karun",
      createdOn: new Date(),
    },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };

    case DELETE_NOTE:
      state.notes.splice(index, 1);
      return {
        ...state,
        notes: state.notes,
      };

    default:
      return state;
  }
}
