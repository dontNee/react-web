import style from '@/styles/footer.module.css'

export default function Footer() {

    return (
        <footer className="mt-4 pt-3 pb-5 bg-body-tertiary">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <h6 className={style["footer-ul-title"]}>Meta Open Source</h6>
                        <ul className={style["footer-ul"]}>
                            <li>
                                <span>@2023</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className={style["footer-ul-title"]}>学习 React</h6>
                        <ul className={style["footer-ul"]}>
                            <li>
                                <span>快速入门</span>
                            </li>
                            <li>
                                <span>安装</span>
                            </li>
                            <li>
                                <span>描述UI</span>
                            </li>
                            <li>
                                <span>添加交互</span>
                            </li>
                            <li>
                                <span>状态管理</span>
                            </li>
                            <li>
                                <span>应急方案</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className={style["footer-ul-title"]}>API 参考</h6>
                        <ul className={style["footer-ul"]}>
                            <li>
                                <span>React API</span>
                            </li>
                            <li>
                                <span>React DOM API</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className={style["footer-ul-title"]}>社区</h6>
                        <ul className={style["footer-ul"]}>
                            <li>
                                <span>行为准则</span>
                            </li>
                            <li>
                                <span>团队</span>
                            </li>
                            <li>
                                <span>文档贡献者</span>
                            </li>
                            <li>
                                <span>鸣谢</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className={style["footer-ul-title"]}>了解更多</h6>
                        <ul className={style["footer-ul"]}>
                            <li>
                                <span>博客</span>
                            </li>
                            <li>
                                <span>React Native</span>
                            </li>
                            <li>
                                <span>隐私政策</span>
                            </li>
                            <li>
                                <span>条款</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}