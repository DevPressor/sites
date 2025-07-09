import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/toggle'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="min-h-screen w-full flex items-center justify-center gap-2"><Button>TanStack Start init!</Button><ThemeToggle /></div>
}
