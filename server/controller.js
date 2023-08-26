const importData = await import("./initData.json", {
  assert: {
    type: "json",
  },
});

let candidates = importData.default;
let key = candidates.length;
console.log("key", key)
const handlerFunctions = {
  show: (req, res) => {
    res.send(candidates);
  },
  add: (req, res) => {
    key++; // increment key value globally
    req.body.data.key=key
    console.log("reqbody", req.body.data);
    candidates.push(req.body.data);
    res.send(req.body.data);
  },
  edit: (req, res) => {
    console.log("body", req.body);
    console.log("params", req.params);
    const newData = req.body;
    const i = candidates.findIndex((el) => (el.key === +req.params.key));
    console.log("candidates", candidates);
    console.log("key", i);
    let candidate = candidates[i];
    console.log("newData", newData);
    console.log("candidate", candidate);
    candidate.lastName = newData.lastName ?? candidate.lastName;
    candidate.familyPhoto = newData.familyPhoto ?? candidate.familyPhoto;
    candidate.gps = newData.gps ?? candidate.gps;
    // TODO This will add anything in the edit to the array of members but I really need add a function to update members by name.
    if (newData.members) {
      candidate.members = [...candidate.members, ...newData.members];
    }
    if (newData.deed) {
      candidate.deed = [...candidate.deed, ...newData.deed];
    }
    candidate.video = newData.video ?? candidate.video;
    candidate.currentOnPayments = newData.currentOnPayments ?? candidate.currentOnPayments;
    candidate.ownsLand = newData.ownsLand ?? candidate.ownsLand;
    candidate.applicationComplete = newData.applicationComplete ?? candidate.applicationComplete;
    candidate.acceptedToBuild = newData.acceptedToBuild ?? candidate.acceptedToBuild;
    candidate.built = newData.built ?? candidate.built;

    candidates[i] = candidate;
    res.send(candidate);
    console.log("data post edit", candidates[i]);
  },
  delete: (req, res) => {
    console.log("row to delete:", req.params.key, "candidates", candidates[key]);
    // eslint-disable-next-line no-import-assign
    candidates = candidates.filter((el) => el.id != +req.params.key);
    res.send(`Record ${key} deleted`);
  },
};

export default handlerFunctions;
