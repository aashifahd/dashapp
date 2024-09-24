import { SideBar } from "../SideBar";
import { ThemeToggle } from "../ThemeToggle";
import { TopBar } from "../TopBar";

export function DashLayout({ children }) {
  return (
    <body className="bg-gray-50">
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <main className="py-6 container bg-red-200">
          <TopBar />
          {children}
        </main>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </body>
  );
}
