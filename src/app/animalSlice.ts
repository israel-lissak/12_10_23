import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface AnimalState {
    value: string
}

const initialState: AnimalState = {
    value: 'animal'
}

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        selectAnimal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { selectAnimal } = animalSlice.actions
export default animalSlice.reducer