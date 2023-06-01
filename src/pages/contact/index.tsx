import TimeLine from "@/components/contact/TimeLine"
import ChatMsg from "@/components/contact/ChatMsg"
import { chatSocket } from "@/utils/socketUtils";
import { useEffect, useState, useRef } from "react";
import * as _ from "lodash";

export default function Contact() {

    // 消息渲染
    const [message, setMessage] = useState([] as any[]);

    // 创建记录message的ref
    const refMsg = useRef([] as any[]);

    // 处理接收到消息的函数
    function reciveMsg(result: any) {
        // 打印收到消息
        console.log("contact::reciveMsg=>result: ", result);
        // 重复判断
        if (hasRepeatData(refMsg.current ,JSON.parse(result))) {
            return
        }
        // 解析响应消息 + 备份原有数据到新数据
        const newMessage = _.concat(refMsg.current, JSON.parse(result));
        // 更新ref
        refMsg.current = newMessage;
        // 更新消息
        setMessage(newMessage);
    }

    // 重复id判断
    function hasRepeatData(array: any[], data: any) {
        // 获取响应数据Id
        const id: any = data.id || data[0].id;
        // 寻找索引
        const index = _.findIndex(array, item => item.id == id);
        // 返回
        return index > -1 ? true : false; 
    }

    // 发送消息
    function sendMsg(msg: string) {
        // 发送消息
        chatSocket.emit("up-data", msg);
    }

    useEffect(() => {
        // 创建连接
        chatSocket.connect();
        // 接收消息
        chatSocket.on("down-data", reciveMsg);
        // 卸载时
        return () => {
            chatSocket.off("up-data");
            chatSocket.off("down-data");
            // 断开连接
            chatSocket.disconnect();
        }
    }, [])

    return (
        <>
            <div className="container">
                <TimeLine message={message} />
            </div>
            <ChatMsg sendMsg={sendMsg} />
        </>
    );
}