import Card from "../card";
import Section from "../section";

export default function AboutNextJs() {

    // 卡片样式
    const cardTextStyle = {
        height: "135px",
        overflow: "hidden"
    }

    return (
        <Section title="关于NextJs">
            <div className="row gx-5">
                <div className="col">
                    <Card title="动态路由">
                        <div className="card-text" style={cardTextStyle}>
                            <p>Next.js 允许你创建具有 动态路由 的页面。</p>
                            <p>Next.js 有一个基于文件系统的路由。</p>
                        </div>
                    </Card>
                </div>
                <div className="col">
                    <Card title="服务端渲染">
                        <div className="card-text" style={cardTextStyle}>
                            <p>Next.js 是一个全栈式的 React 框架。</p>
                            <p>Next.js 支持服务端渲染。</p>
                        </div>
                    </Card>
                </div>
                <div className="col">
                    <Card title="高级特性">
                        <div className="card-text" style={cardTextStyle}>
                            <p>Next.js 支持自定义Babel配置</p>
                            <p>Next.js 支持PostCss配置</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
}