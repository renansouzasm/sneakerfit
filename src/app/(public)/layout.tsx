import { SidebarProvider } from "@/context/sidebar/SidebarContext";
import { SidebarStore } from "./components/sidebar-store";
import { SidebarTrigger } from "./components/sidebar-trigger";

type Props = {
  children: React.ReactNode;
};

function StoreLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <SidebarStore />
      <SidebarTrigger />

      {children}
    </SidebarProvider>
  );
}

export default StoreLayout;
