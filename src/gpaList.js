import React from "react";
import { AcademicResults } from "./gpaData";

export class GpaTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGroup: "all",
    };
  }

  handleGroupClick = (group) => {
    this.setState({ currentGroup: group });
  };

  render() {
    const gpaRows = AcademicResults.filter((g) => {
      if (this.state.currentGroup === "all") {
        return true; // แสดงทุกกลุ่ม
      } else {
        return g.term === this.state.currentGroup;
      }
    }).map((g) => (
      <tr key={g.sub_id}>
        <td>{g.term}</td>
        <td>{g.sub_id}</td>
        <td>{g.sub_name}</td>
        <td>{g.theory}</td>
        <td>{g.practical}</td>
        <td>{g.credit}</td>
        <td>{g.level}</td>
        <td>{g.note}</td>
      </tr>
    ));

    return (
      <>
        <div className="row">
          <h1>Job ผลการเรียน</h1>
          <div className="col">
            <button
              className="btn btn-outline-warning me-3"
              onClick={() => this.handleGroupClick("all")}
            >
              แสดงทั้งหมด
            </button>
            <button
              className="btn btn-outline-info me-3"
              onClick={() => this.handleGroupClick("1/2565")}
            >
              1/2565
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => this.handleGroupClick("2/2565")}
            >
              2/2565
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => this.handleGroupClick("3/2565")}
            >
              3/2565
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => this.handleGroupClick("1/2566")}
            >
              1/2566
            </button>
          </div>
          <table className="table table-striped border table-hover bg-info">
            <thead>
              <tr>
                <th>ภาคเรียน</th>
                <th>รหัสวิชาเรียน</th>
                <th>ชื่อวิชาเรียน</th>
                <th>ทฤษฎี</th>
                <th>ปฏิบัติ</th>
                <th>หน่วยกิต</th>
                <th>ระดับผลการเรียน	</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>{gpaRows}</tbody>
          </table>
        </div>
      </>
    );
  }
}
