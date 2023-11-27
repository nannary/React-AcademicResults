import React from "react";
import { AcademicResults } from "./gpaData";

export class GpaTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGroup: "all", // เพิ่ม state เพื่อเก็บข้อมูลกลุ่มเรียนที่กำลังแสดง ("all" หมายถึงแสดงทุกกลุ่ม)
    };
  }

  handleGroupClick = (group) => {
    this.setState({ currentGroup: group });
    this.setState({ selectedGroup: group });
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
        <td className="text-center">{g.term}</td>
        <td className="text-center">{g.sub_id}</td>
        <td>{g.sub_name}</td>
        <td className="text-center">{g.theory}</td>
        <td className="text-center">{g.practical}</td>
        <td className="text-center">{g.credit}</td>
        <td className="text-center">{g.level}</td>
        <td>{g.note}</td>
      </tr>
    ));

    return (
      <>
        <div className="row">
          <h2 className="text-primary d-flex justify-content-center align-items-center mt-3 mb-3">
            <span class="material-symbols-outlined">draft</span>ผลการเรียน
          </h2>
          <div className="d-flex justify-content-center">
            <button
              className={`btn ${
                this.state.selectedGroup === "all"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } me-3`}
              onClick={() => this.handleGroupClick("all")}
            >
              แสดงทั้งหมด
            </button>
            <button
              className={`btn ${
                this.state.selectedGroup === "1/2565"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } me-3`}
              onClick={() => this.handleGroupClick("1/2565")}
            >
              1/2565
            </button>
            <button
              className={`btn ${
                this.state.selectedGroup === "2/2565"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } me-3`}
              onClick={() => this.handleGroupClick("2/2565")}
            >
              2/2565
            </button>
            <button
              className={`btn ${
                this.state.selectedGroup === "3/2565"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } me-3`}
              onClick={() => this.handleGroupClick("3/2565")}
            >
              3/2565
            </button>
            <button
              className={`btn ${
                this.state.selectedGroup === "1/2566"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => this.handleGroupClick("1/2566")}
            >
              1/2566
            </button>
          </div>
          <hr className="mt-4" size="5"></hr>
          <table className="table table-striped table-bordered table-hover mt-3">
            <thead>
              <tr className="table-primary">
                <th className="text-center">ภาคเรียน</th>
                <th className="text-center">รหัสวิชาเรียน</th>
                <th>ชื่อวิชาเรียน</th>
                <th className="text-center">ทฤษฎี</th>
                <th className="text-center">ปฏิบัติ</th>
                <th className="text-center">หน่วยกิต</th>
                <th className="text-center">ระดับผลการเรียน </th>
                <th className="text-center">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>{gpaRows}</tbody>
          </table>
        </div>
      </>
    );
  }
}
