const importData = await import("./initData.json", {
  assert: {
    type: "json",
  },
});
let data = importData.default;
let key = data.length;

const handlerFunctions = {
  show: (req, res) => {
    res.send(data);
  },
  add: (req, res) => {
    console.log("body", req.body);
    key++; // increment key value globally
    const { candidateData } = req.body;
    const newCandidate = {
      ...candidateData,
      key: key,
    };
    data.push(newCandidate);
    res.send(newCandidate);
  },
  edit: (req, res) => {
    console.log("body", req.body);
    console.log("params", req.params);
    const newData = req.body;
    const i = data.findIndex((el) => (el.key = +req.params.key));
    console.log("key", i);
    let candidate = data[i];
    console.log("newData", newData);
    console.log("candidate", candidate);
    candidate.lastName = newData.lastName ?? candidate.lastName;
    candidate.familyPhoto = newData.familyPhoto ?? candidate.familyPhoto;
    candidate.gps = newData.gps ?? candidate.gps;
    // TODO This will add anything in the edit to the array of members but I really need another component to edit/remove/add members.
    if (newData.members) {
      candidate.members = [...candidate.members, ...newData.members];
    }
    if (newData.deed) {
      candidate.deed = [...candidate.deed, ...newData.deed];
    }
    candidate.video = newData.video ?? candidate.video;
    candidate.current = newData.current ?? candidate.current;
    candidate.ownsLand = newData.ownsLand ?? candidate.ownsLand;
    candidate.applicationComplete =
      newData.applicationComplete ?? candidate.applicationComplete;
    data[i] = candidate;
    res.send(candidate);
  },
  delete: (req, res) => {
    console.log("row to delete:", req.params.key, "data", data[key]);
    // eslint-disable-next-line no-import-assign
    data = data.filter((el) => el.id != +req.params.key);
    res.send(`Record ${key} deleted`);
  },
};

export default handlerFunctions;
