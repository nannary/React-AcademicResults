import React from "react";
import { Students } from "./dataLab";

export class StudentTable extends React.Component {
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
    const studentRows = Students.filter((s) => {
      if (this.state.currentGroup === "all") {
        return true; // แสดงทุกกลุ่ม
      } else {
        return s.std_class === this.state.currentGroup;
      }
    }).map((s) => (
      <tr key={s.std_id}>
        <td>{s.std_id}</td>
        <td>{s.std_name}</td>
        <td>{s.std_gpa}</td>
        <td>{s.std_class}</td>
      </tr>
    ));

    return (
      <>
        <div className="row">
          <h1>LAB การผูกข้อมูลกับ Component</h1>
          <div className="col-5 mb-3">
            <button
              className="btn btn-outline-warning me-3"
              onClick={() => this.handleGroupClick("all")}
            >
              แสดงทุกกลุ่ม
            </button>   
            <button
              className="btn btn-outline-info me-3"
              onClick={() => this.handleGroupClick("1")}
            >
              กลุ่มเรียน 1
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => this.handleGroupClick("2")}
            >
              กลุ่มเรียน 2
            </button>
          </div>
          <table className="table table-striped border table-hover">
            <thead>
              <tr>
                <th>รหัสนักศึกษา</th>
                <th>ชื่อ - นามสกุล</th>
                <th>เกรดเฉลี่ยสะสม</th>
                <th>กลุ่มเรียน</th>
              </tr>
            </thead>
            <tbody>{studentRows}</tbody>
          </table>
        </div>
      </>
    );
  }
}
