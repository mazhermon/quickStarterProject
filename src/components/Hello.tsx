import React, { useEffect, useState } from 'react'

import styles from './hello.module.css'

export const Hello: React.FC = () => {
  const [pageLoadedAtTime, setPageLoadedAtTime] = useState<string | null>(null)
  useEffect(() => {
    const date = new Date()
    const formattedTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    setPageLoadedAtTime(formattedTime)
  }, [])

  return (
    <>
      <h1 className={styles.hello_heading}>Maz Hermon</h1>
      <p>hello 😄</p>
      <p>This page was loaded at {pageLoadedAtTime}</p>
    </>
  )
}
