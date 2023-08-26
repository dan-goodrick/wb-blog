import "./NewCandidate.css";
import keys from "../Candidates/dataFields";

export default function NewCandidate({ addCandidate}) {
  console.log("dataFields", keys);
  // onSubmit needs to be at the parent level so the inputs can be captured
  return (
    <form className="new-candidate" onSubmit={addCandidate}>
    { Object.keys(keys).map((key) => <input key={key} type="text" name={key} placeholder={keys[key][0]} defaultValue={keys[key][1]}></input>)}
      <button type="submit">Add Candidate</button>
    </form>
  );
}
