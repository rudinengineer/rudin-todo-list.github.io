export default function deleteNote(id: number) {
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') ?? "[]") : []
    notes.forEach((value: any, index: number) => {
        if ( Number(value.id) === Number(id) ) {
            notes.splice(index, 1)
            return localStorage.setItem('notes', JSON.stringify(notes))
        }
    })
}