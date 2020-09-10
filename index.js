const express = require('express')
const { response } = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

let persons = [
    {
        name: "Arto Hellas",
        number: "903285209",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "2034383",
        id: 2
    },
    {
        name: "Dan Abramov",
        numbeid: "12-3423-4236",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        numbeid: "12-42341-2411",
        id: 4
    }
]

app.get('/info', (req, res) => {
    const nof = persons.length
    const text = "Phonebook has info for " + nof + " people\n"
    const date = new Date()
    const datestring = date.toDateString()
    const timestring = date.toTimeString()
    res.send(text + datestring + " " + timestring)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const generateId = () => {
    const id = Math.floor(Math.random() * 10000)
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    const isNameUnique = !persons.some(person => person.name === body.name)

    if (!isNameUnique) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log(persons)

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})