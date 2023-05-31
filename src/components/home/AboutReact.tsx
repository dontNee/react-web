import Card from "../card";
import Section from "../section";

export default function AboutReact() {
    // 卡片样式
    const cardTextStyle = {
        height: "135px",
        overflow: "hidden"
    }

    return (
        <Section title="关于React">
            <div className="row gx-5">
                <div className="col">
                    <Card title="组件">
                        <div className="card-text" style={cardTextStyle}>
                            <p>组件是 React 的核心概念之一。</p>
                            <p>React 允许你将标签、CSS 和 JavaScript 组合成自定义“组件”，即应用程序中可复用的 UI 元素。</p>
                        </div>
                    </Card>
                </div>
                <div className="col">
                    <Card title="交互">
                        <div className="card-text" style={cardTextStyle}>
                            <p>在 React 中，随时间变化的数据被称为状态（state）。</p>
                            <p>你将学习如何编写处理交互的组件，更新它们的状态，并根据时间变化显示不同的效果。</p>
                        </div>
                    </Card>
                </div>
                <div className="col">
                    <Card title="Hook">
                        <div className="card-text" style={cardTextStyle}>
                            <p>钩子函数允许你使用与组件不同的React功能。</p>
                            <p>您可以使用内置的 Hook 或将它们组合起来构建自己的钩子。</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
}