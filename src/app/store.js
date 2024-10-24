import { configureStore } from "@reduxjs/toolkit";
import stackslice from "./services/stackSlice";
import arrayslice from "./services/arraySlice";
import linekdListslice from "./services/listSlice";
import queueslice from "./services/queueSlice.js";
import circularQueueslice from "./services/circularQueueSlice.js";
import priorityQueueSlice from "./services/priorityQueueSlice.js";

const store = configureStore({
  reducer: {
    stack: stackslice,
    array: arrayslice,
    linkedList: linekdListslice,
    queue: queueslice,
    circularQueue: circularQueueslice,
    priorityQueue: priorityQueueSlice,
  },
});

export default store;
