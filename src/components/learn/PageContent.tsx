import Footer from "../footer";
import Section from "../section";
import BreadCrumb from "./BreadCrumb";

export default function PageContent() {

    return (
        <div className="container-fluid p-4">
            <BreadCrumb />
            <Section title="渲染和提交">
                <h5>组件显示到屏幕之前，其必须被 React 渲染。理解这些处理步骤将帮助您思考代码的执行过程并能解释其行为。</h5>
                <p>
                    想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品。这种请求和提供 UI 的过程总共包括三个步骤：
                </p>
                <ol className="decimal">
                    <li>
                        <p>触发 一次渲染（把客人的点单分发到厨房）</p>
                    </li>
                    <li>
                        <p>渲染 组件（在厨房准备订单）</p>
                    </li>
                    <li>
                        <p>提交 到 DOM（将菜品放在桌子上）</p>
                    </li>
                </ol>
            </Section>
            <Section title="渲染和提交">
                <h5>组件显示到屏幕之前，其必须被 React 渲染。理解这些处理步骤将帮助您思考代码的执行过程并能解释其行为。</h5>
                <p>
                    想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品。这种请求和提供 UI 的过程总共包括三个步骤：
                </p>
                <ol className="decimal">
                    <li>
                        <p>触发 一次渲染（把客人的点单分发到厨房）</p>
                    </li>
                    <li>
                        <p>渲染 组件（在厨房准备订单）</p>
                    </li>
                    <li>
                        <p>提交 到 DOM（将菜品放在桌子上）</p>
                    </li>
                </ol>
            </Section>
            <Section title="渲染和提交">
                <h5>组件显示到屏幕之前，其必须被 React 渲染。理解这些处理步骤将帮助您思考代码的执行过程并能解释其行为。</h5>
                <p>
                    想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品。这种请求和提供 UI 的过程总共包括三个步骤：
                </p>
                <ol className="decimal">
                    <li>
                        <p>触发 一次渲染（把客人的点单分发到厨房）</p>
                    </li>
                    <li>
                        <p>渲染 组件（在厨房准备订单）</p>
                    </li>
                    <li>
                        <p>提交 到 DOM（将菜品放在桌子上）</p>
                    </li>
                </ol>
            </Section>
            <Section title="渲染和提交">
                <h5>组件显示到屏幕之前，其必须被 React 渲染。理解这些处理步骤将帮助您思考代码的执行过程并能解释其行为。</h5>
                <p>
                    想象一下，您的组件是厨房里的厨师，把食材烹制成美味的菜肴。在这种场景下，React 就是一名服务员，他会帮客户们下单并为他们送来所点的菜品。这种请求和提供 UI 的过程总共包括三个步骤：
                </p>
                <ol className="decimal">
                    <li>
                        <p>触发 一次渲染（把客人的点单分发到厨房）</p>
                    </li>
                    <li>
                        <p>渲染 组件（在厨房准备订单）</p>
                    </li>
                    <li>
                        <p>提交 到 DOM（将菜品放在桌子上）</p>
                    </li>
                </ol>
            </Section>
            <Footer />
        </div>
    );
}