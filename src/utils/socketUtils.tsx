import { io } from "socket.io-client"

// 建立连接
function createConnect(socketUrl?: any) {

    // 创建一个socket
    const socket = io(socketUrl, {
        autoConnect: false
    });

    // 返回创建的socket
    return socket;

}

// 聊天socket
export const chatSocket = createConnect("http://43.138.104.32:3002");