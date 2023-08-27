import "./Candidates.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Candidate from "../Candidate/Candidate";
import "./Candidates.css";
import NewCandidate from "../NewCandidate/NewCandidate";
import dataFields from "./dataFields";

export default function Candidates() {
  const [candidateList, setCandidateList] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const addCandidate = async (e) => {
    e.preventDefault();
    const data = {};
    for (const k in dataFields) {
      let val = e.target[k].value;
      data[k] = k === "members" || k === "deed" ? JSON.parse(val) : val;
    }
    console.log("newData", data);
    const posted = await axios.post("/addCandidate", { data });
    console.log("posteddata", posted.data);
    setCandidateList([...candidateList, posted.data]);
    setFormVisible(false);
  };

  const getCandidates = async () => {
    await axios.get("/getCandidates").then((res) => {
      console.log("getResponse", res.data);
      setCandidateList(res.data);
    });
    console.log("candidateList-getCandidates", candidateList);
  };

  const updateCandidate = async (k, e) => {
    e.preventDefault();

    console.log("update event target", e.target);
    const data = { key: k };
    for (const el of e.target.elements) {
      if (el.tagName === "INPUT") data[el.name] = el.value;
      // data[el.name] = el.name === "members" || el.name === "deed" ? JSON.parse(el.value) : el.value;
    }

    console.log("update event", data);
    candidateList[k] = data;
    setCandidateList(candidateList);
    await axios.put(`/editCandidate/${k}`, data);
    setEditMode(false);
  };

  const deleteCandidate = async (k) => {
    await axios.delete(`/delCandidate/${k}`);
    setEditMode(false);
  };

  useEffect(() => {
    console.log("useEffect", candidateList);
    getCandidates();
  }, [formVisible, editMode]); //save, add, del, edit

  return (
    <div className="candidates">
      <NewCandidate
        setFormVisible={setFormVisible}
        formVisible={formVisible}
        addCandidate={addCandidate}
      />
      {candidateList &&
        candidateList.map((el) => {
          return (
            <Candidate
              key={el.key}
              data={el}
              editMode={editMode}
              setEditMode={setEditMode}
              updateCandidate={updateCandidate}
              deleteCandidate={deleteCandidate}
              k={el.key}
            />
          );
        })}
    </div>
  );
}
