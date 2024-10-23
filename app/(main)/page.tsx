import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper} from 'lucide-react'


export default function Home() {
  return (
    <>
      <div  className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="پست ها" count={110} icon={<Newspaper 
          className="text-slate-500" size={72}
        />} />
        <DashboardCard title="دسته بندی ها" count={8} icon={<Folder 
          className="text-slate-500" size={72}
        />} />
        <DashboardCard title="کامنت ها" count={340} icon={<MessageCircle 
          className="text-slate-500" size={72}
        />} />
      </div>
      <AnalyticsChart />
      <PostsTable title="تازه ترین ها" limit={3} />
    </>
  );
}
