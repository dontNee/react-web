// 添加事件监听器
export function addEventListener(target: any, event: any, callback: any) {
    // 测试传入的是Dom还是String
    target = target.addEventListener ? target : document.getElementById(target);
    if (!target) {
        return console.debug("添加事件监听器失败");
    }
    // 添加监听器
    target.addEventListener(event, callback);
}
// 删除事件监听器
export function removeEventListener(target: any, event: any, callback: any) {
    // 测试传入的是Dom还是String
    target = target.addEventListener ? target : document.getElementById(target);
    if (!target) {
        return console.debug("添加事件监听器失败");
    }
    // 删除监听器
    target.removeEventListener(event, callback);
}