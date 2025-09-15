import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
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
        <Tabs defaultValue="agent" className="flex flex-col flex-1">
          <SiteHeader
            left={<div className="text-base font-medium">Name Of Agent</div>}
            actions={
              <Button size="sm">
                Publish
              </Button>
            }
          >
            <div className="flex-1 flex justify-center">
              <TabsList className="w-fit gap-2">
                <TabsTrigger value="agent" className="flex-none">Agent</TabsTrigger>
                <TabsTrigger value="customization" className="flex-none">Customization</TabsTrigger>
                <TabsTrigger value="results" className="flex-none">Results</TabsTrigger>
              </TabsList>
            </div>
          </SiteHeader>

          <div className="flex flex-1 flex-col">
            <TabsContent value="agent" className="flex flex-1">
              <div className="@container/main flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-lg font-semibold">Agent Overview</h2>
                <p className="text-sm text-muted-foreground">Placeholder content for the Agent tab.</p>
              </div>
            </TabsContent>

            <TabsContent value="customization" className="flex flex-1">
              <div className="@container/main flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-lg font-semibold">Customization</h2>
                <p className="text-sm text-muted-foreground">Placeholder content for the Customization tab.</p>
              </div>
            </TabsContent>

            <TabsContent value="results" className="flex flex-1">
              <div className="@container/main flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-lg font-semibold">Results</h2>
                <p className="text-sm text-muted-foreground">Placeholder content for the Results tab.</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  )
}