import { Button, Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useSelector } from "react-redux";

const Diplomas = () => {
	const diplomas = useSelector((state) => state.diplomas);

	return (
		<div className="m-4 position-relative">
			<Pageheader title="Diplomas" heading="Main Menu" active="Diplomas" />

			<div className="mb-4">
				<Button>Add Diploma</Button>
			</div>

			{diplomas?.length > 0 ? (
				diplomas.map((diploma) => (
					<Row className="row" key={diploma._id}>
						<Col sm={4}>
							<Card className={`card-primary`}>
								<Card.Header className="pb-0 d-flex">
									<h5 className="card-title mb-0 pb-0">{diploma.title}</h5>
								</Card.Header>
								<Card.Body className={`text-primary`}>
									{diploma.description}
								</Card.Body>
								<Card.Footer className="d-flex justify-content-between">
									<h6>
										Total Hours :
										<span className="text-primary">${diploma.totalHours}</span>
									</h6>
									<h6>
										Chapters :
										<span className="text-primary">{diploma.chapters}</span>
									</h6>
								</Card.Footer>
								<div className="m-2">
									<Button>Add Chapter</Button>
								</div>
							</Card>
						</Col>
					</Row>
				))
			) : (
				<Card>
					<Card.Body>
						<p className="text-center text-primary">No data available</p>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default Diplomas;
