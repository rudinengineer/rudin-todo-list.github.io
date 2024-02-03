export default function updateNote(id: string, note: string) {
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') ?? "[]") : []
    if ( notes.length ) {
        notes.forEach((value: any, index: number) => {
            if ( Number(value.id) === Number(id) ) {
                notes[index].note = note
            }
        })
    }
    return localStorage.setItem('notes', JSON.stringify(notes))
}