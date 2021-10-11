import "./style.css";
import { Grid } from "gridjs-react";
import { useState } from "react";
import faker from "faker";

export default function GridTable() {
  const row = () => [faker.name.findName(), faker.internet.email()];
  const [data, setData] = useState([row()]);
  const update = () => {
    setData(data.slice(0).concat([row()]));
  };
  return (
    <div className="App">
      <button
        style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
        onClick={update.bind(this)}
      >
        {" "}
        Add record{" "}
      </button>
      <Grid
        data={data}
        columns={["Name", "Email"]}
        pagination={{
          limit: 15
        }}
        sort={{
          multiColumn: false
        }}
        search
        style={{
          table: {
            border: "3px solid #ccc",
            "margin-top": "1rem"
          },
          th: {
            "background-color": "rgba(0, 0, 0, 0.1)",
            color: "#000",
            "border-bottom": "3px solid #ccc",
            "text-align": "center"
          },
          td: {
            "text-align": "left"
          }
        }}
      />
    </div>
  );
}
