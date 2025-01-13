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
  description: string;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Blockchain Transparency",
    icon: Database,
    href: "/blockchain",
    description: "Monitor real-time supply chain and compliance status",
  },
  {
    title: "Data Security",
    icon: Shield,
    href: "/security",
    description: "View threat detection and incident response metrics",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    href: "/sustainability",
    description: "Track carbon footprint and sustainability goals",
  },
  {
    title: "Compliance",
    icon: Gavel,
    href: "/compliance",
    description: "Manage regulatory compliance and audits",
  },
  {
    title: "Integration Platform",
    icon: Server,
    href: "/integration",
    description: "Monitor system integrations and workflows",
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
          placeholder="Search features, reports, or tools..."
          className="h-9"
        />
        <Search className="h-4 w-4 text-muted-foreground" />
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
          <main className="flex-1 overflow-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Welcome to Guardian IO</h1>
              <p className="mt-2 text-muted-foreground">
                Monitor and manage your supply chain transparency, security, and compliance
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-lg border bg-card p-6 shadow-sm transition-colors hover:border-primary/20 hover:bg-accent/50"
                >
                  <div className="mb-4 flex items-center space-x-2">
                    <item.icon className="h-5 w-5" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard