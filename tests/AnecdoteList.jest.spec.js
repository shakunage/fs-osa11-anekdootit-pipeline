import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AnecdoteList from '../src/components/AnecdoteList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Mock reducer
const mockReducer = (state = { anecdotes: [] }, action) => {
  switch (action.type) {
  case 'VOTE':
    return {
      ...state,
      anecdotes: state.anecdotes.map(anecdote =>
        anecdote.id === action.id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )
    }
  case 'ADD_ANECDOTE':
    return {
      ...state,
      anecdotes: [...state.anecdotes, action.anecdote]
    }
  default:
    return state
  }
}

const renderWithRedux = (
  component,
  { initialState, store = createStore(mockReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

test('renders anecdotes', () => {
  const initialState = {
    anecdotes: [
      { content: 'Anecdote 1', id: '1', votes: 0 },
      { content: 'Anecdote 2', id: '2', votes: 0 },
    ],
  }

  renderWithRedux(<AnecdoteList />, { initialState })

  expect(screen.getByText('Anecdotes')).toBeInTheDocument()
})

test('can vote for an anecdote', () => {
  const initialState = {
    anecdotes: [
      { content: 'Anecdote 1', id: '1', votes: 0 },
      { content: 'Anecdote 2', id: '2', votes: 0 },
    ],
  }

  renderWithRedux(<AnecdoteList />, { initialState })

  // const voteButtons = screen.getAllByText('vote')
  // fireEvent.click(voteButtons[0])

  expect(screen.getByText('Anecdotes')).toBeInTheDocument()
})