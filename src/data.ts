import { Quiz } from "./models/Quiz";

export const quizzes: Quiz[] = [
	{
		id: "1",
		name: "Star Wars",
		questions: [
			{
				id: "1",
				text: "Who is Luke Skywalker's father?",
				answers: [
					{ id: "1", text: "Darth Vader", isCorrect: true },
					{ id: "2", text: "Emperor Palpatine", isCorrect: false },
					{ id: "3", text: "Obi-Wan Kenobi", isCorrect: false },
					{ id: "4", text: "Yoda", isCorrect: false },
				],
				correctAnswer: "1",
			},
			{
				id: "2",
				text: "What planet is the home of the Wookiees?",
				answers: [
					{ id: "5", text: "Tatooine", isCorrect: false },
					{ id: "6", text: "Coruscant", isCorrect: false },
					{ id: "7", text: "Endor", isCorrect: true },
					{ id: "8", text: "Kashyyyk", isCorrect: false },
				],
				correctAnswer: "7",
			},
			{
				id: "3",
				text: "Who trained Anakin Skywalker to become a Jedi?",
				answers: [
					{ id: "9", text: "Yoda", isCorrect: false },
					{ id: "10", text: "Mace Windu", isCorrect: false },
					{ id: "11", text: "Qui-Gon Jinn", isCorrect: true },
					{ id: "12", text: "Obi-Wan Kenobi", isCorrect: false },
				],
				correctAnswer: "11",
			},
			{
				id: "4",
				text: "What is the name of Han Solo's ship?",
				answers: [
					{ id: "13", text: "TIE Fighter", isCorrect: false },
					{ id: "14", text: "Star Destroyer", isCorrect: false },
					{ id: "15", text: "Millennium Falcon", isCorrect: true },
					{ id: "16", text: "X-wing", isCorrect: false },
				],
				correctAnswer: "15",
			},
			{
				id: "5",
				text: "Who killed Jabba the Hutt?",
				answers: [
					{ id: "17", text: "Han Solo", isCorrect: true },
					{ id: "18", text: "Luke Skywalker", isCorrect: false },
					{ id: "19", text: "Princess Leia", isCorrect: false },
					{ id: "20", text: "Lando Calrissian", isCorrect: false },
				],
				correctAnswer: "17",
			},
			{
				id: "6",
				text: "What is the Sith name of Palpatine?",
				answers: [
					{ id: "21", text: "Darth Sidious", isCorrect: true },
					{ id: "22", text: "Darth Maul", isCorrect: false },
					{ id: "23", text: "Darth Plagueis", isCorrect: false },
					{ id: "24", text: "Darth Tyrannus", isCorrect: false },
				],
				correctAnswer: "21",
			},
			{
				id: "7",
				text: 'What is the name of the desert planet in "Star Wars: The Force Awakens"?',
				answers: [
					{ id: "25", text: "Jakku", isCorrect: true },
					{ id: "26", text: "Tatooine", isCorrect: false },
					{ id: "27", text: "Hoth", isCorrect: false },
					{ id: "28", text: "Endor", isCorrect: false },
				],
				correctAnswer: "25",
			},
			{
				id: "8",
				text: 'Who is the Supreme Leader of the First Order in "Star Wars: The Force Awakens"?',
				answers: [
					{ id: "29", text: "Darth Vader", isCorrect: false },
					{ id: "30", text: "Emperor Palpatine", isCorrect: false },
					{ id: "31", text: "Snoke", isCorrect: true },
					{ id: "32", text: "Kylo Ren", isCorrect: false },
				],
				correctAnswer: "31",
			},
			{
				id: "9",
				text: 'What is the name of the bounty hunter who captured Han Solo in "The Empire Strikes Back"?',
				answers: [
					{ id: "33", text: "Dengar", isCorrect: false },
					{ id: "34", text: "Boba Fett", isCorrect: true },
					{ id: "35", text: "IG-88", isCorrect: false },
					{ id: "36", text: "Bossk", isCorrect: false },
				],
				correctAnswer: "34",
			},
			{
				id: "10",
				text: "What color is Mace Windu's lightsaber?",
				answers: [
					{ id: "37", text: "Blue", isCorrect: false },
					{ id: "38", text: "Red", isCorrect: false },
					{ id: "39", text: "Green", isCorrect: false },
					{ id: "40", text: "Purple", isCorrect: true },
				],
				correctAnswer: "40",
			},
		],
	},
	{
		id: "2",
		name: "Animal",
		questions: [
			{
				id: "1",
				text: "What is the fastest land animal?",
				answers: [
					{ id: "1", text: "Cheetah", isCorrect: true },
					{ id: "2", text: "Lion", isCorrect: false },
					{ id: "3", text: "Gazelle", isCorrect: false },
					{ id: "4", text: "Horse", isCorrect: false },
				],
				correctAnswer: "1",
			},
			{
				id: "2",
				text: "Which animal is known as the 'King of the Jungle'?",
				answers: [
					{ id: "5", text: "Elephant", isCorrect: false },
					{ id: "6", text: "Tiger", isCorrect: false },
					{ id: "7", text: "Lion", isCorrect: true },
					{ id: "8", text: "Bear", isCorrect: false },
				],
				correctAnswer: "7",
			},
			{
				id: "3",
				text: "What is the largest mammal in the world?",
				answers: [
					{ id: "9", text: "Blue Whale", isCorrect: true },
					{ id: "10", text: "Elephant", isCorrect: false },
					{ id: "11", text: "Giraffe", isCorrect: false },
					{ id: "12", text: "Hippopotamus", isCorrect: false },
				],
				correctAnswer: "9",
			},
		],
	},
	{
		id: "3",
		name: "Car",
		questions: [
			{
				id: "1",
				text: "Which car brand has a prancing horse as its logo?",
				answers: [
					{ id: "1", text: "Ferrari", isCorrect: true },
					{ id: "2", text: "Porsche", isCorrect: false },
					{ id: "3", text: "Lamborghini", isCorrect: false },
					{ id: "4", text: "Bugatti", isCorrect: false },
				],
				correctAnswer: "1",
			},
			{
				id: "2",
				text: "Which company produces the Mustang?",
				answers: [
					{ id: "5", text: "Chevrolet", isCorrect: false },
					{ id: "6", text: "Dodge", isCorrect: false },
					{ id: "7", text: "Ford", isCorrect: true },
					{ id: "8", text: "Toyota", isCorrect: false },
				],
				correctAnswer: "7",
			},
			{
				id: "3",
				text: "What country is the car brand Volvo from?",
				answers: [
					{ id: "9", text: "Germany", isCorrect: false },
					{ id: "10", text: "Sweden", isCorrect: true },
					{ id: "11", text: "USA", isCorrect: false },
					{ id: "12", text: "France", isCorrect: false },
				],
				correctAnswer: "10",
			},
		],
	}
]
