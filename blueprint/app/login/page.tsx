import { login } from './action'

interface PageProps {
  searchParams: Promise<{ error?: string }>
}

export default async function LoginPage({ searchParams }: PageProps) {
  // Resolve the searchParams promise to look for authentication errors
  const { error } = await searchParams

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card border rounded-xl shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">BLUEPRINT LOG IN</h1>
          <p className="text-sm text-muted-foreground">
            WELCOME BACK!
          </p>
        </div>
        <form action={login} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full h-10 px-3 py-2 text-sm rounded-md border bg-input text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full h-10 px-3 py-2 text-sm rounded-md border bg-input text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          {error && (
            <div className="p-3 text-sm rounded-md bg-destructive/10 text-destructive text-center font-medium border border-destructive/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-10 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
