import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../Hooks/App'

export default function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {user} ---- {channel}
      {/* <ComponentF /> */}
    </div>
  )
}
