import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  id: number
  img: string
  heading: string
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<CartItem>) => {

      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemExists) {
        state.items.push(action.payload)
      }

    }

  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

