type Message = {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export function MessagesTable({ data }: { data: Message[] }) {
  return (
    <table border={1} cellPadding={8} width="100%">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Mensaje</th>
        </tr>
      </thead>
      <tbody>
        {data.map((m) => (
          <tr key={m.id}>
            <td>{new Date(m.createdAt).toLocaleString()}</td>
            <td>{m.name}</td>
            <td>{m.email}</td>
            <td>{m.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
