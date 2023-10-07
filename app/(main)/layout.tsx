import { NavigationSideBar } from "@/components/navigation/navigation-sidebar"

const MainLayout = async ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full okoklh">
      <div
        className="hidden md:flex h-full w-[73px] z-30 flex-col fixed inset-y-0"
      >
        <NavigationSideBar />
      </div>

      <main
        className="md:pl-[72px] h-full"
      >
        {children}
      </main>
    </div>
  )
}

export default MainLayout