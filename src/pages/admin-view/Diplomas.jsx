import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useSelector } from "react-redux";

const Diplomas = () => {
	const diplomas = useSelector((state) => state.diplomas);

	return (
		<div className="m-4 position-relative">
			<Pageheader title="Diplomas" heading="Main Menu" active="Diplomas" />

			{diplomas?.length > 0 ? (
				diplomas.map((diploma) => (
					<Row className="row" key={diploma._id}>
						<Col sm={4}>
							<Card className={`card-primary`}>
								<Card.Header className=" pb-0">
									<h5 className="card-title mb-0 pb-0">{diplomas.title}</h5>
								</Card.Header>
								<Card.Body className={`text-primary`}>
									{diploma.description}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				))
			) : (
				<Card>
					<Card.Body>
						<p className="text-center">No data available</p>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default Diplomas;
