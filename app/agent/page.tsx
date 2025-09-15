import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 16)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader
          left={<div className="text-base font-medium">Name Of Agent</div>}
          actions={
            <Button size="sm">
              Publish
            </Button>
          }
        >
          <div className="flex-1 flex justify-center">
            <Tabs defaultValue="agent" className="w-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="agent">Agent</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {/* Main content area - intentionally empty for agent page */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}