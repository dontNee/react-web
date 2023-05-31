import PageContent from "@/components/learn/PageContent";
import SideBar from "@/components/learn/SideBar";

export default function Learn() {

    return (
        <div className="pt-1" style={{display: 'flex'}}>
        <SideBar />
        <PageContent />
        </div>
    );
}