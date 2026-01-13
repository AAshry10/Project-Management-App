import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    //Grapping inputs data
    const projectData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    //validation
    if (
      projectData.title.trim() === "" ||
      projectData.description.trim() === "" ||
      projectData.dueDate.trim() === ""
    ) {
      // Show Error Modal
      modalRef.current.open();
      return;
    }

    //Calling onAdd function--(Adding The Project To The List)
    onAdd(projectData);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter a value </p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-start justify-end gap-4 my-4">
          <li>
            <button className="py-2 text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="DUE Date" />
        </div>
      </div>
    </>
  );
}
