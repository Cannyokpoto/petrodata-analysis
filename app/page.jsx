
import SideBar from "@/components/SideBar/SideBar";
import AdminArea from "@/components/AdminArea/AdminArea";

export default function Home() {
  return (
    <div className="flex w-100 min-h-100vh">
     <SideBar />
     <AdminArea />
    </div>
  );
}
