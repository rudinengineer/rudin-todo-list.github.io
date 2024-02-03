import getRandomColor from "./getRandomColor";

export default function createNote(note: string) {
    let dates = new Date()
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let month = months[dates.getMonth()];
    const date = dates.getDate() + ' ' + month + ' ' + dates.getFullYear() + ' ' + (String(dates.getHours()).length === 1 ? '0' + dates.getHours() : dates.getHours()) + ':' + dates.getMinutes()
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') ?? "[]") : []
    let data = {
        id: notes.length + 1,
        color: getRandomColor(),
        note: note,
        date: date
    }
    notes.push(data)
    return localStorage.setItem('notes', JSON.stringify(notes))
}