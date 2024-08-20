import React, { useState } from "react";
import { Card, Button, Form, Row, Col, Modal, Spinner } from "react-bootstrap";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { createQuiz } from "../../api/admin/chapter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Quiz = ({ chapterId }) => {
	const [quizTitle, setQuizTitle] = useState("");
	const [questions, setQuestions] = useState([]);
	const [showTextEditor, setShowTextEditor] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
	const [editorContent, setEditorContent] = useState("");

	const navigate = useNavigate();
	const reduxDispatch = useDispatch();

	const handleQuizTitleChange = (e) => setQuizTitle(e.target.value);

	const handleQuestionChange = (index, field, value) => {
		const updatedQuestions = [...questions];
		console.log(index);
		console.log(updatedQuestions[0]);
		updatedQuestions[index][field] = value;
		setQuestions(updatedQuestions);
	};

	const handleAnswerChange = (qIndex, aIndex, field, value) => {
		const updatedQuestions = [...questions];
		updatedQuestions[qIndex].answers[aIndex][field] = value;
		setQuestions(updatedQuestions);
	};

	const handleCorrectAnswerChange = (qIndex, aIndex) => {
		const updatedQuestions = [...questions];
		updatedQuestions[qIndex].answers.forEach((answer, index) => {
			answer.isCorrect = index === aIndex;
		});
		setQuestions(updatedQuestions);
	};

	const addQuestion = () => {
		setQuestions([
			...questions,
			{ text: "", answers: [{ text: "", isCorrect: false }], score: 1 },
		]);
	};

	const addAnswer = (qIndex) => {
		const updatedQuestions = [...questions];
		updatedQuestions[qIndex].answers.push({ text: "", isCorrect: false });
		setQuestions(updatedQuestions);
	};

	const handleSaveQuiz = async () => {
		setIsSubmitting(true);
		const newQuiz = {
			title: quizTitle,
			chapter: chapterId,
			questions,
			totalScore: questions.reduce((total, q) => total + q.score, 0),
			passedScore: Math.floor(
				questions.reduce((total, q) => total + q.score, 0) * 0.7
			),
		};
		await createQuiz(newQuiz);
		navigate("/admin/diplomas");
		reduxDispatch({
			type: "open",
			payload: { message: "All levels created successfully" },
		});
		setIsSubmitting(false);
	};

	const handleTextEditorChange = (content) => setEditorContent(content);

	const openTextEditor = (index) => {
		setActiveQuestionIndex(index);
		setShowTextEditor(true);
	};

	const saveTextFromEditor = () => {
		handleQuestionChange(activeQuestionIndex, "text", editorContent);
		setShowTextEditor(false);
	};

	return (
		<Card className="card-primary">
			<Card.Header className="pb-0">
				<h5 className="card-title mb-0">Create Quiz</h5>
			</Card.Header>
			<Card.Body className="text-primary">
				<Row>
					<Col sm={3}>
						<Form.Group>
							<Form.Label>Quiz Title:</Form.Label>
							<Form.Control
								type="text"
								value={quizTitle}
								onChange={handleQuizTitleChange}
								placeholder="Enter quiz title"
							/>
						</Form.Group>
						<Button
							className="my-3 w-100"
							variant="primary"
							onClick={addQuestion}
						>
							Add Question
						</Button>
						<Button
							className="w-100"
							variant="success"
							onClick={handleSaveQuiz}
							disabled={isSubmitting || questions.length === 0}
						>
							{isSubmitting ? (
								<>
									<Spinner
										as="span"
										animation="border"
										size="sm"
										role="status"
										aria-hidden="true"
									/>
									Submitting...
								</>
							) : (
								"Save Quiz"
							)}
						</Button>
					</Col>
					<Col sm={9}>
						{questions.length > 0 ? (
							questions.map((question, qIndex) => (
								<Card key={qIndex} className="mb-3">
									<Card.Header className="d-flex justify-content-between align-items-center">
										<h6 className="mb-0">
											{question.text === "" ? (
												`Question ${qIndex + 1}`
											) : (
												<span
													dangerouslySetInnerHTML={{ __html: question.text }}
												/>
											)}
										</h6>
										<Button
											variant="secondary"
											onClick={() => openTextEditor(qIndex)}
										>
											Edit Text
										</Button>
									</Card.Header>
									<Card.Body>
										<Form.Group className="mb-3">
											<Form.Label>Score:</Form.Label>
											<Form.Control
												type="number"
												value={question.score}
												onChange={(e) =>
													handleQuestionChange(
														qIndex,
														"score",
														parseInt(e.target.value)
													)
												}
												placeholder="Enter question score"
											/>
										</Form.Group>
										{question.answers.map((answer, aIndex) => (
											<Row key={aIndex} className="align-items-center">
												<Col sm={9}>
													<Form.Control
														type="text"
														value={answer.text}
														onChange={(e) =>
															handleAnswerChange(
																qIndex,
																aIndex,
																"text",
																e.target.value
															)
														}
														placeholder={`Answer ${aIndex + 1}`}
													/>
												</Col>
												<Col sm={3}>
													<Form.Check
														type="radio"
														name={`correct-answer-${qIndex}`}
														checked={answer.isCorrect}
														onChange={() =>
															handleCorrectAnswerChange(qIndex, aIndex)
														}
														label="Correct"
													/>
												</Col>
											</Row>
										))}
										<Button
											className="mt-3"
											variant="primary"
											onClick={() => addAnswer(qIndex)}
										>
											Add Answer
										</Button>
									</Card.Body>
								</Card>
							))
						) : (
							<p>No questions added yet. Click "Add Question" to begin.</p>
						)}
					</Col>
				</Row>

				<Modal show={showTextEditor} onHide={() => setShowTextEditor(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Question Text</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SunEditor
							setContents={editorContent}
							onChange={handleTextEditorChange}
							setOptions={{
								buttonList: [
									["undo", "redo"],
									["font", "fontSize"],
									["bold", "italic", "underline"],
									["align", "list"],
									["link", "image"],
								],
								minHeight: "200px",
							}}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => setShowTextEditor(false)}
						>
							Close
						</Button>
						<Button variant="primary" onClick={saveTextFromEditor}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Card.Body>
		</Card>
	);
};

export default Quiz;
