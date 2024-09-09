/* eslint-disable no-unused-vars */
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "./components/Column";
import { Input } from "./components/Input";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Go to work, dont get lazy" },
    { id: 2, title: "Make dinner with friends" },
    { id: 3, title: "Do some coding, dont get lazy" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTasks((prevTasks) => {
        const activeIndex = prevTasks.findIndex(
          (task) => task.id === active.id
        );
        const overIndex = prevTasks.findIndex((task) => task.id === over.id);
        const newTasks = Array.from(prevTasks);
        newTasks.splice(overIndex, 0, newTasks.splice(activeIndex, 1)[0]);
        return newTasks;
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 font-bold p-4 text-gray-700">
        <header className="text-center">
          <h1 className="underline text-2xl mb-1">Todo List</h1>
          <Input onSubmit={addTask}></Input>
        </header>
        <div>
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <Column tasks={tasks} />
          </DndContext>
        </div>
      </div>
    </>
  );
}

export default App;
