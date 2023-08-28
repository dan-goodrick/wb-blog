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





  useEffect(() => {
    console.log("useEffect", candidateList);
    getCandidates();
  }, [formVisible]); //save, add, del, edit

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
              k={el.key}
              candidateList={candidateList}
              setCandidateList={setCandidateList}
            />
          );
        })}
    </div>
  );
}
