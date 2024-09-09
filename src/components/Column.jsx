/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Task } from "./Task";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Column = ({ tasks }) => {
  return (
    <div className="bg-gray-400 rounded-md h-fit p-6">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <h3 className="text-xl font-bold">To Do</h3>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};
