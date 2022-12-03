import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headers from "../../components/Headers";

function LandingPage() {
  const [joblist, setJoblist] = useState([]);

  const getJobList = async () => {
    try {
      const res = await axios.get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      setJoblist(res?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <div className="bg-body">
      <Headers />
      <Container className="my-3">
        <Form className="row">
          <Form.Group className="col-md-4">
            <Form.Label className="fs-6 fw-bold">Job Description</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Filter by title, benefits, company, expectations"
            />
          </Form.Group>
          <Form.Group className="col-md-4">
            <Form.Label className="fs-6 fw-bold">Location</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Filter by city, state, zip or country"
            />
          </Form.Group>
          <div className="col-md-4 d-flex align-items-end mt-2">
            <div>
              <Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
                label={<span className="fs-6 fw-bold">Fulltime Only</span>}
              />
            </div>
            <div className="ms-5">
              <Button size="sm" className="px-4">
                Search
              </Button>
            </div>
          </div>
        </Form>

        <Card className="mt-3 shadow">
          <Card.Body>
            <Card.Title>Job List</Card.Title>

            {joblist.map((el: any, index: number) => {
              const date1 = new Date(el?.created_at).getTime();
              const date2 = Date.now();
              const marginDate = date2 - date1;
              const marginDay = Math.floor(marginDate / (1000 * 60 * 60 * 24));
              const marginWeek = Math.floor(
                marginDate / (1000 * 60 * 60 * 24 * 7)
              );
              const marginMonth = Math.floor(
                marginDate / (1000 * 60 * 60 * 24 * 7 * 4)
              );
              const marginYear = Math.floor(
                marginDate / (1000 * 60 * 60 * 24 * 7 * 4 * 12)
              );

              let datepost = "";

              switch (true) {
                case marginDay === 0:
                  datepost = `today'`;
                  break;

                case marginDay > 0 && marginDay < 7:
                  datepost = `${marginDay} day ago'`;
                  break;

                case marginWeek <= 4:
                  datepost = `${marginWeek} week ago'`;
                  break;

                case marginMonth <= 12:
                  datepost = `${marginMonth} week ago'`;
                  break;

                default:
                  datepost = `${marginYear} years ago`;
                  break;
              }

              return (
                <div key={index}>
                  <hr className="" />
                  <div className="d-flex justify-content-between">
                    <div className="row">
                      <Link to="" className="text-decoration-none fw-bold">
                        {el?.title}
                      </Link>
                      <div>
                        <span className="text-muted">{el?.company}-</span>
                        <span className="text-success fw-bold">{el?.type}</span>
                      </div>
                    </div>
                    <div className="row text-end">
                      <span className="fw-bold">{el?.location}</span>
                      <span className="text-muted">{datepost}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LandingPage;
