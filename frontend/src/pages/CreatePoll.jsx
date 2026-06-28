import { useState } from "react";
import axios from "axios";

const CreatePoll = () => {
const userInfo = JSON.parse(
localStorage.getItem("userInfo")
);

const [question, setQuestion] =
useState("");

const [options, setOptions] =
useState([
"",
"",
"",
"",
]);

const createPoll =
async (e) => {
e.preventDefault();

  
  try {
    await axios.post(
      "http://localhost:5000/api/polls/create",
      {
        question,
        options,
      },
      {
        headers: {
          Authorization:
            "Bearer " +
            userInfo.token,
        },
      }
    );

    alert(
      "Poll Created Successfully"
    );

    setQuestion("");

    setOptions([
      "",
      "",
      "",
      "",
    ]);
  } catch (error) {
    alert(
      error.response?.data
        ?.message ||
        "Creation Failed"
    );
  }
};
  

return ( <div className="min-h-screen bg-gray-100 flex justify-center items-center">

  
  <form
    onSubmit={createPoll}
    className="bg-white p-8 rounded-xl shadow w-full max-w-xl"
  >
    <h1 className="text-3xl font-bold mb-6">
      Create Poll
    </h1>

    <input
      type="text"
      placeholder="Question"
      value={question}
      onChange={(e) =>
        setQuestion(
          e.target.value
        )
      }
      className="w-full border p-3 rounded mb-4"
      required
    />

    {options.map(
      (option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${
            index + 1
          }`}
          value={option}
          onChange={(e) => {
            const updated =
              [...options];

            updated[index] =
              e.target.value;

            setOptions(
              updated
            );
          }}
          className="w-full border p-3 rounded mb-3"
          required
        />
      )
    )}

    <button
      className="w-full bg-blue-600 text-white py-3 rounded cursor-pointer"
    >
      Create Poll
    </button>
  </form>
</div>
  

);
};

export default CreatePoll;
