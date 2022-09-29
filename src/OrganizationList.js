import { Link } from "react-router-dom";
import { useState } from "react";
import "./OrganizationList.css";

export function OrganizationList({ orgs, onAddOrg }) {
  const [name, setName] = useState("");

  function addOrg() {
    const org = {
      name: name,
      members: [],
    };
    onAddOrg(org);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="list">
      <h1>Organizations</h1>
      <div className="add-container">
        <input value={name} onChange={handleNameChange} />
        <button onClick={addOrg}>Add</button>
      </div>
      <ul>
        <li className="item header">
          <span>Organization</span>
          <span>Members</span>
        </li>
        {Object.entries(orgs).map(([key, org], index) => {
          return (
            <li className="item" key={key}>
              <Link to={`/${key}`}>{org.name}</Link>
              <span className="members">{org.members.length}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
