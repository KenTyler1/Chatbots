import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CSVLink } from "react-csv";

function Exportexcel() {
  const [tourdata, setTourdata] = useState([]);
  useEffect(() => {
    const gettourdata = async () => {
      const tourreq = await fetch("http://localhost:8000/lists");
      const tourres  = await tourreq.json();
      console.log(tourres);
      setTourdata(tourres);
    };
    gettourdata();
  }, []);

  // npm install react-csv --save

  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8">
            <CSVLink
              data={tourdata}
              filename="filename"
              className="btn btn-success mb-3"
            >
              Export Tour Data
            </CSVLink>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Exportexcel;
