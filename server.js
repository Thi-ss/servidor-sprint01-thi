import express from 'express'

const app = express()
const porta = 3000

app.get('/', (req, res) => {
  res.send('Seja muito bem-vindo à Central de Informações Escola Linda')
})


let cursos = [
  { "id": 1, "nome": "Desenvolvimento de Sistemas" },
  { "id": 2, "nome": "Redes de Computadores" },
  { "id": 3, "nome": "Administração" }
]

let instituicao = {
  "nome": "Escola Linda",
  "cidade": "São Paulo",
  "tipo": "Ensino Técnico"
}

let professores = [
  { "id": 1, "nome": "Thiago", "disciplina": "Biologia" },
  { "id": 2, "nome": "Eduardo", "disciplina": "Java" },
  { "id": 3, "nome": "Kevin", "disciplina": "Sistemas Operacionais" },
]

let ajuda = {
  Status: 'Status informando que o servidor está online',
  Escola: 'Informações da escola',
  Cursos: 'Mostra os cursos e informações referentes',
  Professor: 'Mostra os professores'
}

app.get('/status', (req, res) => {
  res.json({ status: 'Servidor Online' })
})

app.get('/escola', (req, res) => {
  res.json(instituicao)
})

app.get('/cursos', (req, res) => {
  res.json(cursos)
})

app.get('/professor', (req, res) => {
  res.json(professores)
})

app.get('/ajuda', (req, res) => {
  res.send(ajuda)
})

app.get("/requisicao", (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: "Solicitação recebida com sucesso!"
  })
})

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})