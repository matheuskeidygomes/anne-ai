import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChatLoadingType = {
    loading: boolean;
};

const ChatLoadingSlice = createSlice({
    name: 'ChatLoading',
    initialState: {
        loading: false,
    },
    reducers: {
        setLoading: (state: ChatLoadingType, action: PayloadAction<any>) => {
            state.loading = !state.loading;
        }
    }
});

export const { setLoading } = ChatLoadingSlice.actions;
export default ChatLoadingSlice.reducer;
