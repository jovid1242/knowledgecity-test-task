const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const port = 3022

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const user = {
    username: "dementor@egggis.ru",
    password: "testpassword1",
    token: "11|47xxxxxxxSt3V0qoBhSQxxxxxxRrXr2Gxxxxxxd64",
}

var students = [
    {
        id: 1,
        study_group_id: 1,
        first_name: "jovid",
        last_name: "masharipov",
        email: "jovid1242@gmail.com",
    },
    {
        id: 2,
        study_group_id: 2,
        first_name: "Jhon",
        last_name: "masharipov",
        email: "jovid1242@gmail.com",
    },

    {
        id: 3,
        study_group_id: 1,
        first_name: "David",
        last_name: "masharipov",
        email: "jovid1242@gmail.com",
    },
    {
        id: 4,
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
    {
        id: Math.floor(Math.random() * 50000),
        study_group_id: 1,
        first_name: "Davdfvdfid",
        last_name: "dfv",
        email: "jovid1242@gmail.com",
    },
]

app.post("/signin", (req, res) => {
    let { username, password } = req.body
    if (user.username === username && user.password === password) {
        res.status(200).json({ username: user.username, token: user.token })
    } else {
        res.status(412).json({ message: "Пароль или логин не правильно" })
    }
})

app.get("/students", (req, res) => {
    res.json(students)
})

app.get("/students/:student_id", (req, res) => {
    let { student_id } = req.params
    const result = students.filter((student) => student.id == student_id)
    res.status(200).json(result)
})

app.delete("/students/:student_id", (req, res) => {
    let { student_id } = req.params
    students = students.filter((student) => student.id != student_id)
    res.status(200).json({ ok: student_id })
})

app.post("/students", (req, res) => {
    let { study_group_id, first_name, last_name, email } = req.body
    const student = {
        id: Math.floor(Math.random() * 88900),
        study_group_id,
        first_name,
        last_name,
        email,
    }
    students.push(student)
    res.status(200).json(student)
})

app.put("/students/:student_id", (req, res) => {
    let { student_id } = req.params
    let { id, study_group_id, first_name, last_name, email } = req.body
    const student = {
        id,
        study_group_id,
        first_name,
        last_name,
        email,
    }
    let index = students.findIndex((el) => el.id == student_id)
    if (index > 0) {
        if (students[index]) students[index] = student
    }

    res.status(200).json({ ok: student_id })
})

app.listen(port, () => {
    console.log("Сервер запущен на порту " + port)
})
