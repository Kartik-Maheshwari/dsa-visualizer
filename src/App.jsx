import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StackComponent from "./components/stack/StackComponent";
import ArrayComponent from "./components/arrays/ArrayComponent";
import ListComponent from "./components/linked-list/ListComponent";

import QueueComponent from "./components/queues/QueueComponent";
import CircularQueueComponent from "./components/circilarQueue/CircularQueueComponent";
import PriorityQueueComponents from "./components/priorityQueue/PriorityQueueComponents";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/stack" element={<StackComponent />} />
        <Route path="/queue" element={<QueueComponent />} />
        <Route path="/circularQueue" element={<CircularQueueComponent />} />
        <Route path="/priorityQueue" element={<PriorityQueueComponents />} />
        <Route path="/array" element={<ArrayComponent />} />
        <Route path="/list" element={<ListComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
