// import axios from 'axios'

// const baseUrl = 'https://fs-osa11-anekdootit-pipeline.fly.dev/anecdotes'

const fakeDatabase = [
  {
    'content': 'If it hurts, do it more often',
    'id': '47145',
    'votes': 20
  },
  {
    'content': 'Adding manpower to a late software project makes it later!',
    'id': '21149',
    'votes': 49
  },
  {
    'content': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'id': '69581',
    'votes': 24
  },
  {
    'content': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'id': '36975',
    'votes': 27
  },
  {
    'content': 'Premature optimization is the root of all evil.',
    'id': '25170',
    'votes': 112
  },
  {
    'content': 'Mitä hitaammin tippuu, sen parempaa tulee',
    'id': '31932',
    'votes': 22
  },
  {
    'content': 'Ei kahta ilman kolmatta',
    'id': '6117',
    'votes': 1
  }
]


const getAll = async () => {
  // const response = await axios.get(baseUrl)
  // return await response.data
  return fakeDatabase
}

const createNew = async (object) => {
  // const pushedObject = {
  //   content: object.content,
  //   id: object.id,
  //   votes: object.votes }
  // const response = await axios.post(baseUrl, pushedObject)
  // return await response.data
  fakeDatabase.concat(object)
}

const update = async (newObject) => {
  fakeDatabase.map(anecdote => anecdote.id === newObject.id ? newObject : anecdote)
}

export default { getAll, createNew, update }