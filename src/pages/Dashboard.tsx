import { Bell, Database, Gavel, Leaf, Search, Server, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

type NavigationItem = {
  title: string;
  icon: React.ComponentType<any>;
  href: string;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Blockchain Transparency",
    icon: Database,
    href: "#blockchain",
  },
  {
    title: "Data Security",
    icon: Shield,
    href: "#security",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    href: "#sustainability",
  },
  {
    title: "Compliance",
    icon: Gavel,
    href: "#compliance",
  },
  {
    title: "Integration Platform",
    icon: Server,
    href: "#integration",
  },
]

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold">Guardian IO</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex w-full max-w-sm items-center space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="h-9"
          prefix={<Search className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <div className="flex w-full flex-col">
          <Header />
          <main className="flex-1 p-6">
            <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center space-x-2">
                    <item.icon className="h-5 w-5" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click to view detailed analytics and management tools for{" "}
                    {item.title.toLowerCase()}.
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard