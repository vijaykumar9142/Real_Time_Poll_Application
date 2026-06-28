import axios from "axios";

const PollCard = ({
poll,
fetchPolls,
}) => {
const userInfo = JSON.parse(
localStorage.getItem("userInfo")
);

console.log(
"POLL DATA:",
poll
);

const votePoll = async (
index
) => {
try {
await axios.post(
"http://localhost:5000/api/polls/vote",
{
pollId: poll._id,
optionIndex: index,
},
{
headers: {
Authorization:
"Bearer " +
userInfo.token,
},
}
);

 
  fetchPolls();
} catch (error) {
  alert(
    error.response?.data
      ?.message ||
      "Vote Failed"
  );
}
 

};

return ( <div className="bg-white p-6 rounded-xl shadow mb-5">

 
  <h2 className="text-xl font-bold mb-2">
    {poll?.question}
  </h2>

  <p className="text-gray-600 mb-4">
    Created By:{" "}
    {poll?.createdBy?.name ||
      "Unknown User"}
  </p>

  {poll?.options?.length >
  0 ? (
    poll.options.map(
      (
        option,
        index
      ) => (
        <button
          key={index}
          onClick={() =>
            votePoll(
              index
            )
          }
          className="w-full text-left bg-blue-100 hover:bg-blue-200 p-3 rounded mb-2 cursor-pointer"
        >
          {option.text}
          {" "}
          (
          {option.votes}
          {" "}
          votes)
        </button>
      )
    )
  ) : (
    <p className="text-red-500">
      No options found
      for this poll
    </p>
  )}
</div>
 

);
};

export default PollCard;
