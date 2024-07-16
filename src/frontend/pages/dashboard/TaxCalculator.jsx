import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import SideMenu from "./SideMenu";
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
  CCollapse,
  CCardBody,
  CBadge,
  CModalFooter,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";
import Greetings from "../../components/greetings/Greetings";

function TaxCalculator() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="main_content flex" style={{ paddingTop: "80px" }}>
      <SideMenu />
      <div className="main_content_wrapper">
        <div className="container pb-5">
          <div className="row pt-5">
            <Greetings />
            <div className="heading clearfix pb-3">
              <h1>Tax Calculated.</h1>
            </div>
            <div className="col-md-12 pb-2 rounded">
              <CTable borderless striped hover responsive="lg">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total Taxes</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Car</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Price When New
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Current Residual Value
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">CIF Kigali</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Current Value{" "}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Importy Duty{" "}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Excise Duty</CTableHeaderCell>
                    <CTableHeaderCell scope="col">VAT</CTableHeaderCell>
                    <CTableHeaderCell scope="col">AUL</CTableHeaderCell>
                    <CTableHeaderCell scope="col">IDL</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plate</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableHeaderCell scope="col">
                      Created Date
                    </CTableHeaderCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxCalculator;
