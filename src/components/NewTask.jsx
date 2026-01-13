import { useState } from "react";
import { useRef } from "react";

import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modalRef = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddClick() {
    //Validatoin
    if (enteredTask.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Cant add an empty task</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-700"
          value={enteredTask}
          onChange={handleChange}
        />
        <button
          className="px-4 py-1 bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 rounded"
          onClick={handleAddClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
