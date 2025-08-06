import { useEffect, useState } from 'react'

type Conversation = {
  reference_id: string
  title: string
}

function App() {
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/conversations`)
        const data = await res.json()
        setConversations(data)
      } catch (err) {
        console.error('Failed to fetch conversations:', err)
      }
    }

    fetchConversations()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Conversation Packs</h1>
      <ul>
        {conversations.map((conv) => (
          <li key={conv.reference_id}>
            <strong>{conv.title}</strong> ({conv.reference_id})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
