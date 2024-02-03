import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import getNote from '../lib/getNote'
import updateNote from '../lib/updateNote'

type Props = {}

export default function Edit({}: Props) {
    const navigate = useNavigate()
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1]
    const value = getNote(id)?.note
    const [note, setNote] = React.useState<string>("")
    const [isLoading, setLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
      if ( !value ) {
        navigate('/create')
      }
    }, [])
  
    const handle = async () => {
      setLoading(true)
      updateNote(id, note)
      navigate('/')
    }
  
    return (
      <Form note={note} setNote={setNote} isLoading={isLoading} handle={handle} value={value} />
    )
}