import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Organization({ orgs, onMembersChange }) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const { organizationName } = useParams();
  const org = orgs[organizationName];

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function addMember() {
    const member = {
      name,
    };
    org.members.push(member);

    onMembersChange(org);
  }

  function removeMember(index) {
    org.members.splice(index, 1);
    onMembersChange(org);
  }

  function goBack() {
    navigate("/");
  }

  return (
    <div className="list">
      <div className="header">
        <h1>{org.name}</h1>
        <span className="back-button" onClick={goBack}>
          Go back
        </span>
      </div>
      <div className="add-container">
        <input value={name} onChange={handleNameChange} />
        <button onClick={addMember}>Add</button>
      </div>
      <h3>Members</h3>
      <ul>
        {org.members.length ? (
          org.members.map((member) => (
            <li className="item" key={member.name}>
              <span>{member.name}</span>
              <span className="delete" onClick={() => removeMember(member)}>
                X
              </span>
            </li>
          ))
        ) : (
          <li>No members</li>
        )}
      </ul>
    </div>
  );
}
