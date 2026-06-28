import {
useEffect,
useState,
} from "react";

import axios from "axios";

import PollCard from "../components/PollCard";

const Polls = () => {
const [polls, setPolls] =
useState([]);

const fetchPolls =
async () => {
try {
const { data } =
await axios.get(
"http://localhost:5000/api/polls/all"
);

  
    setPolls(data);
  } catch (error) {
    console.log(error);
  }
};
  

useEffect(() => {
fetchPolls();
}, []);

return ( <div className="min-h-screen bg-gray-100 p-6">

  
  <h1 className="text-4xl font-bold text-center mb-8">
    All Polls
  </h1>

  <div className="max-w-3xl mx-auto">
    {polls.map((poll) => (
      <PollCard
        key={poll._id}
        poll={poll}
        fetchPolls={
          fetchPolls
        }
      />
    ))}
  </div>
</div>
  

);
};

export default Polls;
