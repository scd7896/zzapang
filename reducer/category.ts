import { Action } from "redux"


const category = (state: Category, action: Action): Category => {
  switch(action.type) {
    default: return { ...state }
  }
}

export default category