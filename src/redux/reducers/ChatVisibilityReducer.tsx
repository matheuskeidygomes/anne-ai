import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChatVisibilityType = {
    show: boolean;
};

const ChatVisibilitySlice = createSlice({
    name: 'ChatVisibility',
    initialState: {
        show: false,
    },
    reducers: {
        setVisibility: (state: ChatVisibilityType, action: PayloadAction<any>) => {
            state.show = !state.show;
        }
    }
});

export const { setVisibility} = ChatVisibilitySlice.actions;
export default ChatVisibilitySlice.reducer;
