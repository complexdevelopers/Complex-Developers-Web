const api = {
  getHealth: () => fetch('/api/health').then((r) => r.json()),
  sendContact: (payload) =>
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((r) => r.json()),
}

export default api
