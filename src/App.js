import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { OrganizationList } from "./OrganizationList";
import { Organization } from "./Organization";

const ORGS = {
  org1: {
    name: "org 1",
    members: [
      {
        name: "member 1",
      },
    ],
  },
  org2: {
    name: "org 2",
    members: [
      {
        name: "member 1",
      },
    ],
  },
};
function App() {
  const [orgs, setOrgs] = useState(ORGS);

  function saveOrg(org) {
    const key = org.name.replace(" ", "");
    setOrgs({ ...orgs, [key]: org });
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<OrganizationList orgs={orgs} onAddOrg={saveOrg} />}
        />
        <Route
          path="/:organizationName"
          element={<Organization orgs={orgs} onMembersChange={saveOrg} />}
        />
      </Routes>
    </div>
  );
}

export default App;
