import React, { useState } from "react";
import { formElement } from "../components/const";
//Import Form Elements
import { ShortAnswer, LongAnswer } from "../components/elements";

export default function Create() {
  //States
  const [form, setForm] = useState([]);

  const items = form;

  //Function to add new Form
  const addForm = (e) => {
    const form = {
      id: Math.random(),
      type: e.target.value,
      required: false,
    };

    setForm((prevState) => [...prevState, form]);
    console.log(items);
  };

  //All the form labels and their values
  const renderLabels =
    formElement &&
    formElement.map((el, key) => (
      <button
        key={key}
        value={el.value}
        onClick={addForm}
        className="bg-blue-200 rounded p-4 m-3 font-bold"
      >
        {el.label}
      </button>
    ));

    //Function to Render items
  function renderElements( items ) {

    switch (items.value) {
      case "short answer":
        return (<ShortAnswer />);
      
      case "long answer":
        return(<LongAnswer />);

      case "multiple choice":
        return(<MultipleChoice />);

      case "checkboxes":
        return(<Checkboxes />);

      default:
        return(<>dummy default text</>);
    }
  };
  const show = items.map(renderElements);

  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen w-1/5 bg-gray-200">
          <h1 className="mx-auto text-lg font-bold text-center p-5">
            Form Type
          </h1>
          <div className="space-y-4">
            <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="text-lg font-medium text-gray-900">
                  Add A New Field
                </h5>

                <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              {/* This where i render all the form labels */}
              <div className="mt-4 leading-relaxed text-gray-700">
                {renderLabels}
              </div>
            </details>
          </div>
        </div>
        <div className="h-screen bg-slate-400 w-4/5 ">
          {/* {items.length >= 1
            ? items.map((item) => { renderElements(item.value)})
            : "Create Some Forms"} */}

          {show}
        </div>
      </div>
    </>
  );
}
