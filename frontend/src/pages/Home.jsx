import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PollCard from "../components/PollCard";

const Home = () => {
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

return (
<> <Navbar />

 
  <div className="max-w-6xl mx-auto py-10 px-4">

    <h1 className="text-3xl font-bold mb-8">
      Active Polls
    </h1>

    <div className="grid md:grid-cols-2 gap-6">

      {polls.length > 0 ? (
        polls.map((poll) => (
          <PollCard
            key={poll._id}
            poll={poll}
            fetchPolls={
              fetchPolls
            }
          />
        ))
      ) : (
        <h2>
          No Polls Available
        </h2>
      )}

    </div>
  </div>
</>
 

);
};

export default Home;
