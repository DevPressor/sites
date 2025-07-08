import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="min-h-screen w-full flex items-center justify-center">TanStack Start init!</div>
}
