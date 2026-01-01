import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, ShieldAlert } from "lucide-react"

export default function AdminMessages() {
  const [messages, setMessages] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  async function loadMessages(params: any = {}) {
  setLoading(true)
  const res = await api.get("/api/admin/messages", {
    params: {
      search,
      ...params,
    },
  })
  setMessages(res.data.data)
  setLoading(false)
  }


  async function markSpam(id: string) {
  const res = await api.patch(`/api/admin/messages/${id}/spam`)

  setMessages((prev) =>
    prev.map((m) =>
      m.id === id
        ? { ...m, isSpam: res.data.data.isSpam }
        : m
      )
    )
  }


  async function remove(id: string) {
    await api.delete(`/api/admin/messages/${id}`)
    loadMessages()
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Contact Messages</h1>

      <Card>
        <CardContent className="p-4 flex gap-4">
          <Input
            placeholder="Search by email, name or message"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && loadMessages()}
          />
          <Button onClick={loadMessages}>Filter</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex gap-2">
          <Button onClick={() => loadMessages()}>All</Button>
          <Button variant="secondary" onClick={() => loadMessages({ spam: "false" })}>
            Valid
          </Button>
          <Button variant="destructive" onClick={() => loadMessages({ spam: "true" })}>
            Spam
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((m) => (
                <TableRow
                  key={m.id}
                  className={m.isSpam ? "opacity-60 bg-red-50 dark:bg-red-950" : ""}
                >
                  <TableCell>{m.name}</TableCell>
                  <TableCell>{m.email}</TableCell>
                  <TableCell className="max-w-md truncate">{m.message}</TableCell>
                  <TableCell>
                    {m.isSpam ? (
                      <Badge variant="destructive">Spam</Badge>
                    ) : (
                      <Badge variant="secondary">Valid</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant={m.isSpam ? "secondary" : "outline"}
                        onClick={() => markSpam(m.id)}
                      >
                        <ShieldAlert size={16} />
                      </Button>

                    <Button size="icon" variant="destructive" onClick={() => remove(m.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {loading && <p className="p-4 text-sm text-muted-foreground">Loading…</p>}
        </CardContent>
      </Card>
    </div>
  )
}
