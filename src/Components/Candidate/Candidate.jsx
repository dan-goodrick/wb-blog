import React from "react";
import './Candidate.css'

export default function Candidate({ data }) {
  // const {key, lastName, familyPhoto, gps, members, deed, video, currentOnPayments, ownsLand, applicationComplete, acceptedToBuild, built} = data
  console.log("Candidate-data", data);
  return (
    <div className="candidate" style={{backgroundImage:`url(${data.familyPhoto})`}}>
      <div>{data.lastName}</div>
      <div>{data.gps}</div>
      {data.members.map((el)=><div key={el.name}>{el.name}</div>)}
      {data.deed.map((el)=><div key={el}><a key={el} href={el}>DeedImage</a></div>)}
      <a href={data.video}>{data.video?`${data.lastName} Family Video`:""}</a>
      <p>Land Ownership Type:{data.ownsLand? "Owns": "Mortgage"}</p>
      <p>Current on Payments:{data.currentOnPayments? "Current": "Behind"}</p>
      <p>Application Complete:{data.applicationComplete? "Complete": "Pending"}</p>
      <p>Chosen for Home:{data.acceptedToBuild? "Selected": "Pending"}</p>
      <p>Home Built:{data.built? "Current": "Behind"}</p>
    </div> //
  );
}
