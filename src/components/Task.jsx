/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({ id, title }) => {
  const { setNodeRef, listeners, transform, attributes, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-2 m-2 bg-gray-300"
    >
      <input className="mr-2 cursor-pointer" type="checkbox" />
      {title}
    </div>
  );
};
