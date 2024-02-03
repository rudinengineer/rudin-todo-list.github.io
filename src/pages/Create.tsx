
import React from 'react'
import { useNavigate } from 'react-router-dom'

import createNote from '../lib/createNote'
import Form from '../components/Form'

type Props = {}

export default function Create({}: Props) {
  const navigate = useNavigate()
  const [note, setNote] = React.useState<string>("")
  const [isLoading, setLoading] = React.useState<boolean>(false)

  const handle = async () => {
    setLoading(true)
    createNote(note)
    navigate('/')
  }

  return (
    <Form note={note} setNote={setNote} isLoading={isLoading} handle={handle} value='' />
  )
}