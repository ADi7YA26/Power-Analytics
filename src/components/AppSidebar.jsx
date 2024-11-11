import { Separator } from "@radix-ui/react-dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar"
import { SearchForm } from "./search-form"

const navlinks = [
  {
    "title": "Dashboard",
    "url": "#",
  },
  {
    "title": "Layouts",
    "url": "#",
  },
  {
    "title": "Mailbox",
    "url": "#",
  },
  {
    "title": "Calander",
    "url": "#",
  },
  {
    "title": "UI Elements",
    "url": "#",
  },
  {
    "title": "Forms",
    "url": "#",
  },
  {
    "title": "Pages",
    "url": "#",
  },
  {
    "title": "Tasks",
    "url": "#",
  },
  {
    "title": "Charts",
    "url": "#",
  },
  {
    "title": "Maps",
    "url": "#",
  },
  {
    "title": "Profile",
    "url": "#",
  },
]

const AppSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h1 className="font-bold text-3xl text-primary mb-4 ">Power Analytics</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navlinks.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a href={item.url}>{item.title}</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <SearchForm />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>

    </SidebarProvider>

  )
}

export default AppSidebar