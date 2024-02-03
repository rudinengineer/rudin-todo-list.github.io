export default function getNote(id: string | null = null) {
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') ?? "[]") : []
    if ( notes.length ) {
        notes.forEach((value: any) => {
            console.log(value)
            if ( Number(value.id) === Number(id) ) {
                notes = value
            }
        })
    }
    return notes
}