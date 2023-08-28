import './Candidate.css'
import axios from "axios";

import keys from "../Candidates/dataFields";
import { useState } from "react";

export default function Candidate({ data, k, candidateList, setCandidateList}) {
  const [editMode, setEditMode] = useState(false);

  const updateCandidate = async (k, e) => {
    e.preventDefault();

    console.log("update event target", e.target);
    const data = { key: k };
    for (const el of e.target.elements) {
      if (el.tagName === "INPUT") data[el.name] = el.value;
      data[el.name] = el.value;
    }
    console.log("update event", data);
    candidateList[k] = data;
    setCandidateList(candidateList);
    await axios.put(`/editCandidate/${k}`, data);
    setEditMode(false);
  };
    const deleteCandidate = async (k) => {
      candidateList.splice(k, 1)
      setCandidateList(candidateList);
      await axios.delete(`/delCandidate/${k}`);

      setEditMode(false);
    };


  console.log("Candidate-data", data, "editMode", editMode);
  return editMode? (
      <div className="candidate" >
      <form className="form" onSubmit={(e)=>updateCandidate(k,e)} >
        {Object.keys(keys).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={keys[key][0]}
            defaultValue={data[key]}
          ></input>
        ))}
        <button type="submit">Update</button>
        <button id="button" onClick={()=>deleteCandidate(k)}>Delete</button></form>
        </div>
    ):(
      <div className="candidate" onDoubleClick={()=>setEditMode(true)} style={{backgroundImage:`url(${data.familyPhoto})`}}>
        <div>{data.lastName}</div>
        <div>{data.gps}</div>
        <div>{data.members}</div>
        <div>{data.deed}</div>
        <a href={data.video}>{data.video?`${data.lastName} Family Video`:""}</a>
        <p>Land Ownership Type:{data.ownsLand? "Owns": "Mortgage"}</p>
        <p>Current on Payments:{data.currentOnPayments? "Current": "Behind"}</p>
        <p>Application Complete:{data.applicationComplete? "Complete": "Pending"}</p>
        <p>Chosen for Home:{data.acceptedToBuild? "Selected": "Pending"}</p>
        <p>Home Built:{data.built? "YES": "NO"}</p>
      </div>
    )}
