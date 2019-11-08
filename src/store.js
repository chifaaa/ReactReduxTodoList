import {createStore, combineReducers} from 'redux'


const newtodoreducer = (state = '', action) => {
    if(action.type === 'SET_NEW_TODO') {
        return action.newtodo
    }
    if(action.type === 'SET_TO_EMPTY') {
        return ''}
    return state
}
const todosReducer = (state = [], action) => {
    if(action.type === 'ADD_TODO') {
        return state.concat(action.anothertodo)
    }
    if(action.type === 'EDIT_TODO') {
        return (state.map(t => {
            if(t.id === action.id) {

    t.checked= ! t.checked;
}
return t
        }))
    }


    // return state.map(m => {
    //     if(m.id === action.id) {
    //         return action.movie
    //     }
    //     return m
    // })



    if(action.type === 'DELETE_TODO') {
        return state.filter(t => {
            if(t.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}

const store = createStore(combineReducers(
    {todos: todosReducer,
    newtodo: newtodoreducer}
))

/*
    TESTING
 


const inception = {
  id: 'inception',
  title: 'Inceptionnnn',
  rating: 5,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}

const shawshank = {
    id: 'shawshank',
    title: 'Shawshank Redeption',
    year: 1994,
    rating: 5
}

store.dispatch({
    type: 'ADD_MOVIE',
    movie: inception
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: shawshank
})
*/

export default store
