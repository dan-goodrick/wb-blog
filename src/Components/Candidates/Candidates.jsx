import "./Candidates.css";
import { Link } from "react-router-dom";

export default function Candidates({initialList}) {
  // let [isEditing, setIsEditing] = useState(true);
  const rows = initialList.map((el) => {
    const { id, description, rate, hours } = el;
    return (
      <Candidate
        key={id}
        initialCandidates={{
          description: description,
          rate: rate,
          hours: hours,
        }}
        editCandidates={false}
      />
    );
  });
  return (
<div className="Home">
      <table>
        <thead>
Header        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
Footer        </tfoot>
      </table>
    </div>
  );
}