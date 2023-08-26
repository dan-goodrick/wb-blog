import './Candidate.css'
import keys from "../Candidates/dataFields";

export default function Candidate({ data, editMode, setEditMode, updateCandidate, deleteCandidate, i}) {
  console.log("Candidate-data", data, "editMode", editMode, "i", i);
  return (
    <div className="candidate" onDoubleClick={()=>setEditMode(true)} style={{backgroundImage:`url(${data.familyPhoto})`}}>
    {editMode? (
      <form className="form" onSubmit={()=>updateCandidate(i)} >
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
        <button id="button" onClick={()=>deleteCandidate(i)}>Delete</button></form>
    ):(
      <>
        <div>{data.lastName}</div>
        <div>{data.gps}</div>
        {data.members.map((el)=><div key={el.name}>{el.name}</div>)}
        {data.deed.map((el)=><div key={el}><a key={el} href={el}>DeedImage</a></div>)}
        <a href={data.video}>{data.video?`${data.lastName} Family Video`:""}</a>
        <p>Land Ownership Type:{data.ownsLand? "Owns": "Mortgage"}</p>
        <p>Current on Payments:{data.currentOnPayments? "Current": "Behind"}</p>
        <p>Application Complete:{data.applicationComplete? "Complete": "Pending"}</p>
        <p>Chosen for Home:{data.acceptedToBuild? "Selected": "Pending"}</p>
        <p>Home Built:{data.built? "YES": "NO"}</p>
      </>
    )}
    </div>
  );
}
