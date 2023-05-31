import Link from "next/link";

export default function Jumbotron() {

    // 标题
    const title = "介绍";
    // 目的
    const purpose = "为了更好的学习Next.js和React建立了本网站。";
    // 内容
    const content = "拥有可供参阅的文档，个人定制的组件和沟通聊天的功能。";
    
    return (
        <div className="jumbotron container-fluid p-5 mt-3 mb-4 bg-light">
            <h1 className="mb-3">
                {title}
            </h1>
            <p>
                {purpose}
            </p>
            <p>
                {content}
            </p>
            <p>
                <Link href="/learn">
                    <button type="button" className="btn btn-secondary">开始学习</button>
                </Link>
            </p>
        </div>
    );
}