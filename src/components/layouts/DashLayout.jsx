import { SideBar } from "../SideBar";
import { ThemeToggle } from "../ThemeToggle";

export function DashLayout({ children }) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>{children}</div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}
