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
    const newData = req.body;
    // console.log("newData", newData, "key: ", req.body.key, "candidates", candidates);
    console.log("candidates", candidates);
    const i = candidates.findIndex((el) => (el.key === +req.params.key));
    for (let prop in newData) {
      candidates[i][prop] = newData[prop] ?? candidates[i][prop];
    }
    res.send(candidates[i]);
  },

  del: (req, res) => {
    console.log("Hit delete");
    candidates = candidates.filter((el) => el.key != +req.params.key);
    res.send(`Record ${req.params.key} deleted`);
  },
};

export default handlerFunctions;
