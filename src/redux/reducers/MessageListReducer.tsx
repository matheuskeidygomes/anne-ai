import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MessageListState = {
    messages: object[];
};

const MessageListSlice = createSlice({
    name: 'MessagesList',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state: MessageListState, action: PayloadAction<any>) => {
            action.payload.id = state.messages.length + 1;
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = MessageListSlice.actions;
export default MessageListSlice.reducer;
