import React from 'react'
import getNote from '../lib/getNote'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import deleteNote from '../lib/deleteNote'

type Props = {}

export default function Notes({}: Props) {
  const [notes, setNotes] = React.useState<any>([])

  const handleDelete = (id: number) => {
    deleteNote(id)
    setNotes(getNote())
  }

  React.useEffect(() => {
    setNotes(getNote())
  }, [])

  console.log(notes)

  return (
    <div>
        {
            notes?.length ? (
            <div className='p-4 columns-2 sm:columns-3 md:columns-4'>
            {
                notes.map((value: any, index: number) => (
                    <Link to={`/note/${value.id}`} className="mb-4 inline-block w-full p-5 rounded-xl border-[1px] text-light group sticky" style={{ backgroundColor: value.color }} key={index}>
                        <button className='hidden group-hover:flex absolute top-2 right-2' data-id={value.id} onClick={(e: any) => {e.preventDefault();handleDelete(value.id)}}><XMarkIcon data-id={value.id} title='hapus catatan' className='w-5 h-5' /></button>
                        <pre className='text-limit-8 text-sm sm:text-base font-medium whitespace-pre-wrap'>{ value.note }</pre>
                        <div className="w-full flex justify-end">
                            <span className='text-xs sm:text-sm'>{ value.date }</span>
                        </div>
                    </Link>
                ))
            }
            </div>
            ) : (
                <div className="w-full p-4">
                    <h1 className="font-bold flex justify-center">Catatan masih kosong.</h1>
                </div>
            )
        }
    </div>
  )
}