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

function BookedRentals() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="main_content flex">
      <SideMenu />
      <div className="main_content_wrapper">
        <div className="container pb-5">
          <div className="row pt-5">
            <Greetings />
            <div className="heading clearfix pb-3">
              <h1>Booked Rentals.</h1>
            </div>
            <div className="col-md-12 pb-2 rounded">
              <CTable borderless striped hover responsive="lg">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Car</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Stock number
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">From Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">To Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Booking status
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Created Date
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                    <CTableHeaderCell scope="col">
                      Created Date
                    </CTableHeaderCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="primary"
                        onClick={() => setVisible(!visible)}
                      >
                        Update status
                      </CButton>
                      <CModal
                        alignment="center"
                        visible={visible}
                        onClose={() => setVisible(false)}
                        aria-labelledby="VerticallyCenteredExample"
                      >
                        <CModalHeader>
                          <CModalTitle id="VerticallyCenteredExample">
                            Modal title
                          </CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            color="secondary"
                            onClick={() => setVisible(false)}
                          >
                            Close
                          </CButton>
                          <CButton color="primary">Update status</CButton>
                        </CModalFooter>
                      </CModal>
                    </CTableDataCell>
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

export default BookedRentals;
