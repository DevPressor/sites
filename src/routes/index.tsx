import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="min-h-screen w-full flex items-center justify-center"><Button>TanStack Start init!</Button></div>
}
