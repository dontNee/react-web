import styles from "@/styles/chatmsg.module.scss";
import { useEffect, useState } from "react";
import * as eventListenHandler from "@/utils/registerEventListener"

export default function ChatMsg(props: any) {
    return (
        <>
            <ChatInput {...props} />
        </>
    );
}

function ChatInput(props: any) {

    // 是否显示发布按钮
    const [showSubmit, setShowSubmit] = useState(false as boolean);

    // 处理失去焦点事件
    function handleBlur() {
        // 可能会处理点击事件
        setTimeout((() => {
            // 隐藏发布按钮
            setShowSubmit(false);
        }), 300);
    }
    // 处理获得焦点事件
    function handleFocus() {
        // 显示发布按钮
        setShowSubmit(true);
    }

    useEffect(() => {
        // 获取元素
        const elem = document.getElementById("textarea-message");
        // 添加失去焦点监听
        elem && eventListenHandler.addEventListener(elem, "blur", handleBlur);
        // 添加获得焦点
        elem && eventListenHandler.addEventListener(elem, "focus", handleFocus);
        // 卸载时出发
        return () => {
            // 取消监听
            elem && eventListenHandler.removeEventListener(elem, "blur", handleBlur);
            elem && eventListenHandler.removeEventListener(elem, "focus", handleFocus);
        }
    })

    // 发布功能
    function handleSubmit() {
        // 获取表单元素
        const elem: any = document.getElementById("textarea-message");
        // 获取元素内容
        const elemValue = elem.value;
        // 发送内容
        props && props.sendMsg(elemValue);
        // 提交后清空元素内容
        elem.value = "";
    }

    return (
        <div className={`${styles['chat-input']} sticky-bottom pt-3 pb-2`}>
            <div className="container">
                <form className="row">
                    <div className="col">

                        <textarea id="textarea-message" 
                            className="form-control" 
                            placeholder="请输入内容" 
                            maxLength={300} 
                            style={{resize: 'none'}}
                        ></textarea>

                        <button type="button" 
                            onClick={handleSubmit} 
                            className={`${styles["submit-btn"]} btn btn-primary`} 
                            style={{display: showSubmit ? '' : 'none'}}
                        >发布</button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
}