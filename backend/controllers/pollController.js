import Poll from "../models/Poll.js";

// =========================
// CREATE POLL
// =========================
export const createPoll = async (
req,
res
) => {
try {
const {
question,
options,
} = req.body;

 
const poll =
  await Poll.create({
    question,
    options: options.map(
      (option) => ({
        text: option,
        votes: 0,
      })
    ),
    createdBy:
      req.user._id,
  });

res.status(201).json(
  poll
);
 

} catch (error) {
console.log(
"CREATE POLL ERROR:",
error
);

 
res.status(500).json({
  message:
    error.message,
});
 

}
};

// =========================
// GET ALL POLLS
// =========================
export const getPolls = async (
req,
res
) => {
try {
const polls =
await Poll.find()
.populate(
"createdBy",
"name email"
)
.sort({
createdAt: -1,
});

 
res.json(polls);
 

} catch (error) {
console.log(
"GET POLLS ERROR:",
error
);

 
res.status(500).json({
  message:
    error.message,
});
 

}
};

// =========================
// VOTE / REMOVE VOTE
// =========================
export const votePoll = async (
req,
res
) => {
try {
const {
pollId,
optionIndex,
} = req.body;

 
console.log(
  "Poll ID:",
  pollId
);
console.log(
  "Option:",
  optionIndex
);
console.log(
  "User:",
  req.user
);

const poll =
  await Poll.findById(
    pollId
  );

if (!poll) {
  return res
    .status(404)
    .json({
      message:
        "Poll not found",
    });
}

const existingVote =
  poll.voters.find(
    (voter) =>
      voter?.user &&
      voter.user.toString() ===
        req.user._id.toString()
  );

// USER ALREADY VOTED
if (existingVote) {

  // SAME OPTION CLICKED AGAIN
  if (
    existingVote.optionIndex ===
    optionIndex
  ) {
    poll.options[
      optionIndex
    ].votes -= 1;

    poll.voters =
      poll.voters.filter(
        (voter) =>
          voter?.user &&
          voter.user.toString() !==
            req.user._id.toString()
      );

    await poll.save();

    return res.json({
      message:
        "Vote removed",
      poll,
    });
  }

  // CHANGE VOTE
  poll.options[
    existingVote.optionIndex
  ].votes -= 1;

  poll.options[
    optionIndex
  ].votes += 1;

  existingVote.optionIndex =
    optionIndex;

  await poll.save();

  return res.json({
    message:
      "Vote updated",
    poll,
  });
}

// FIRST TIME VOTE
poll.options[
  optionIndex
].votes += 1;

poll.voters.push({
  user:
    req.user._id,
  optionIndex,
});

await poll.save();

res.json({
  message:
    "Vote added",
  poll,
});
 

} catch (error) {
console.log(
"VOTE ERROR:",
error
);

 
res.status(500).json({
  message:
    error.message,
});
 

}
};
