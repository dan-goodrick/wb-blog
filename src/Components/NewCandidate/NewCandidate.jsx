import "./NewCandidate.css";
import keys from "../Candidates/dataFields";

export default function NewCandidate({
  addCandidate,
  setFormVisible,
  formVisible,
}) {
  console.log("formVisible", formVisible);
  // onSubmit needs to be at the parent level so the inputs can be captured

  return (
    <div onDoubleClick={()=>setFormVisible(true)}>
      {formVisible ? (
        <form className="form" onSubmit={addCandidate}>
          {Object.keys(keys).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={keys[key][0]}
              defaultValue={keys[key][1]}
            ></input>
          ))}
          <button type="submit">Add Candidate</button>
        </form>
      ) : (
        <div className="plus"></div>
        
      )}
      ;
    </div>
  );
}
