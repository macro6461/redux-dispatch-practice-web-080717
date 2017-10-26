export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const removalIndex = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {pets: [...state.pets.slice(0, removalIndex), ...state.pets.slice(removalIndex + 1)]})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsDiv = document.getElementById("container")
  let allPets = state.pets.map((pet) => {
    console.log(pet)
    return `<li>${pet.name}</li>`
  }).join(" ")
  petsDiv.innerHTML = `<ul>${allPets}</ul>`
}
