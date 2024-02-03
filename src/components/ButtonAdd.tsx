import { PlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type Props = {}

export default function ButtonAdd({}: Props) {
  return (
    <div className='fixed right-4 bottom-4'>
        <Link to={'/create'} className='btn-primary px-4 py-3 rounded-md flex gap-2 items-center'><PlusIcon className='w-6 h-6' />Buat Catatan</Link>
    </div>
  )
}