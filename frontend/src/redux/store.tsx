import { configureStore } from '@reduxjs/toolkit';
import MessageListSlice from './reducers/MessageListReducer';
import ChatVisibilitySlice from './reducers/ChatVisibilityReducer';
import ChatLoadingSlice from './reducers/ChatLoadingReducer';

export default configureStore({
    reducer: {
        MessagesList: MessageListSlice,
        ChatVisibility: ChatVisibilitySlice,
        ChatLoading: ChatLoadingSlice,
    },
});

