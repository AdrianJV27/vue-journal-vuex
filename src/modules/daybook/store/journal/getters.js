
// export const myGetter = (state) => {
//  return state
// }

export const getEntriesByTerm = (state) => (term = '') => {
    
    if( term.length === 0 ) return state.entries

    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntryById = ( state ) => (id = '') => {
    
    const entry = state.entries.find(entry => entry.id === id)
    
    if(!entry) return 
    
    // return entry 
    return { ...entry } //para crear una copia de entry para que asi no pase la referencia anterior y modifique el state (realmente puede modificar el state? no se podia solo con las mutaciones?) TODO: probarlo
}
