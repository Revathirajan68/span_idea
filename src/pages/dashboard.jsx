import { Card, CardBody, CardTitle, Col, Row } from "react-bootstrap";
import CardComponent from "../components/presentational/card";

// style
import './style.scss';
import StackedBarChart from "../components/container/chart";
import DashboardTable from "../components/container/dashboardTable";

const Dashboard = () => {
    const cardDetails = [
        {
            title: "Overall Resources",
            count: "80,000",
        },
        {
            title: "Daily Average",
            count: "80,000",
        },
        {
            title: "Allocations",
            count: "80,000",
        },
        {
            title: "Yet to Allocate",
            count: "80,000",
        }
    ]

    const tableDetails = [
        {
            "Resource ID": 1211,
            "Days": "Monday",
            "Metrics": 25000,
            "Allocation ID": "#141312"
        },
        {
            "Resource ID": 1211,
            "Days": "Tuesday",
            "Metrics": 25000,
            "Allocation ID": "#141312"
        },
        {
            "Resource ID": 1211,
            "Days": "Wednessday",
            "Metrics": 25000,
            "Allocation ID": "#141312"
        },
        {
            "Resource ID": 1211,
            "Days": "Thursday",
            "Metrics": 25000,
            "Allocation ID": "#141312"
        },
        {
            "Resource ID": 1211,
            "Days": "Friday",
            "Metrics": 25000,
            "Allocation ID": "#141312"
        },
    ]
    return (
        <div className="dashboard-container">
            <h1 className="text-heading">Dashboard</h1>
            <div className="dashboard-content">
                <div className="card-container">
                    {cardDetails.map((data,index) => (
                        <CardComponent data={data}  key={`${index}${data?.title}`}/>
                    ))}
                </div>
                <Row className="chart-table-container">
                    <Col md={5}>
                        <Card className="chart-card">
                            <CardTitle>Allocation Per Day</CardTitle>
                            <CardBody>
                                <StackedBarChart />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={7}>
                        <Card className="table-card">
                            <CardTitle>Resources Available</CardTitle>
                            <CardBody>
                                <DashboardTable data={tableDetails} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dashboard;