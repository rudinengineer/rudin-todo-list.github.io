import React from 'react'
import Loading from '../components/Loading'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type Props = {
    note: string,
    setNote: React.Dispatch<React.SetStateAction<string>>,
    isLoading: boolean,
    handle: any,
    value: string
}

export default function Form({note, setNote, isLoading, handle, value}: Props) {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className="w-full p-4 flex justify-between items-center">
            <Link to={'/'}><ArrowLeftIcon className='w-6 h-6' /></Link>
            <button className='btn-primary px-4 py-3 rounded-md' onClick={handle} disabled={note.length === 0}>{ isLoading ? <Loading /> : "Simpan" }</button>
        </div>
        <form method="post" className='w-full h-full'>
            <textarea className='w-full h-full outline-none p-4' placeholder='Tulis Catatan...' onChange={(e) => {setNote(e.target.value)}}>{ value }</textarea>
        </form>
    </div>
  )
}