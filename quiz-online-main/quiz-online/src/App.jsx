import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import GetAllQuiz from "./components/quiz/GetAllQuiz"
import AddQuestion from "./components/question/AddQuestion"
import UpdateQuestion from "./components/question/UpdateQuestion"
import Navbar from "./components/layout/NavBar"
import Admin from "./components/Admin"
import Quiz from "./components/quiz/Quiz"
import QuizResult from "./components/quiz/QuizResult"
import QuizStepper from "./components/quiz/QuizStepper"


function App() {
	return (
		<main className="container mt-5 mb-5">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
                    <Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />

				</Routes>
			</Router>
		</main>
	)
}

export default App
