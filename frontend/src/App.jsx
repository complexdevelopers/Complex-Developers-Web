import React, { useEffect, useState } from 'react'

export default function App() {
  const [health, setHealth] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [result, setResult] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((j) => setHealth(j))
      .catch(() => setHealth({ ok: false }))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setResult(null)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const json = await res.json()
    setResult(json)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Complex Developers — Demo Frontend</h1>
      <p>Backend health: {health ? (health.ok ? 'OK' : 'DOWN') : 'checking...'}</p>

      <h2>Contact form</h2>
      <form onSubmit={submit} style={{ maxWidth: 480 }}>
        <div>
          <label>Name</label>
          <br />
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label>Message</label>
          <br />
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="submit">Send</button>
        </div>
      </form>

      {result && (
        <pre style={{ background: '#f7f7f7', padding: 10, marginTop: 10 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  )
}
