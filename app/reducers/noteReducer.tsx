export type Note = {
  id: string,
  title: string,
  content: string,
  createdAt: number
};

export type NoteState = Note[];

export type NoteAction = 
  | { type: "ADD_NOTE", payload: Note }
  | { type: "UPDATE_NOTE", payload: Note }
  | { type: "DELETE_NOTE", payload: { id: string } }

export const initialState: NoteState = []

export function noteReducer(notes: NoteState, action: NoteAction): NoteState {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [
        action.payload,
        ...notes
      ]
    }
    case 'UPDATE_NOTE': {
      return notes.map((note) => {
        if (note.id == action.payload.id) return action.payload
        else return note 
      })
    }
    case 'DELETE_NOTE': {
      return notes.filter((note) => note.id !== action.payload.id)
    }
    default: {
      throw Error('Unknown action');
    }
  }
}