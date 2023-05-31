import Section from "@/components/section";
import styles from "@/styles/tictactoe.module.scss";
import { useState } from "react";
import Confirm from "@/components/confirm";
import * as _ from 'lodash'

export default function TicTacToe() {
    // 游戏标题
    const title = "· 井字棋游戏";
    // 游戏描述
    const descption = "介绍：基于官方的教程创建的井字棋游戏。";
    // 游戏规则
    const rules = `游戏规则：
        1.两个玩家，一个打圈 (O)，一个打叉 (X)，轮流在3乘3的格上打自己的符号，最先以横、直、斜连成一线则为胜。
        2.如果,棋盘上无子可下仍未分出胜负则为和棋。`

    return (
        <Section title={title}>
            <p>{descption}</p>
            <p>{rules}</p>
            <div style={{textAlign: "center"}}>
                <Game />
            </div>
        </Section>
    );
}
// 游戏组件
function Game() {
    // 记录当前棋子
    const [xIsNext, setXIsNext] = useState(true);
    // 记录游戏的完整历史，用于回溯棋盘
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 记录当前的步数，用于回溯棋盘
    const [currentMove, setCurrentMove] = useState(0);
    // 游戏消息，用于通知用户当前结束信息
    const [message, setMessage] = useState("开始游戏");
    // 当前棋盘
    const currentSquares = history[currentMove];
    // 对话框开启状态
    const [open, setOpen] = useState(false);

    // handlePlay
    function handlePlay(nextSquares: any) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        // 更新数据
        setHistory(nextHistory);
        setXIsNext(!xIsNext);
        setCurrentMove(nextHistory.length - 1);
        // 计算是否获胜
        confirmGameResult(calculateWinner(nextSquares, changeMessage, setOpen), setOpen);
    }

    // 重置棋盘
    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    // 游戏结束,设置消息
    function changeMessage(winner: string) {
        setMessage(`游戏结束，${winner}。请选择重新开始或者保留当前界面。`);
    }

    // 获胜提示
    function confirmGameResult(result : any, setOpen: any) {
        if (result) {
            // 显示确认对话框
            setOpen(true);
        }
    }

    return (
        <>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <Confirm open={open} setOpen={setOpen} restartGame={() => jumpTo(0)} message={message} />
        </>
    );
}
// 棋盘组件
function Board({ xIsNext, squares, onPlay}: any) {
    // 处理点击事件
    function handleClick(i: number) {
        // 如果当前位置已经有棋子
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        // 备份棋盘数据
        const nextSquares = squares.slice();
        // 设置新数据
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    return (
        <>
            <div className={styles["board-row"]}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className={styles["board-row"]}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className={styles["board-row"]}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );
}
// 按钮方块
function Square({ value, onSquareClick } : any ) {
    return (
        <button className={styles.square} onClick={onSquareClick}>{value}</button>
    );
}

// 获胜条件
function calculateWinner(squares : Array<string>, setMessage?: (x: string) => void, setOpen?: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setMessage && setMessage(`恭喜执'${squares[a]}'棋者获胜`)
        return squares[a];
      }
    }
    // 棋盘是否存在空
    if (_.every(squares) && setMessage) {
        setOpen(true);
        setMessage("本此对局双方和棋")
    }
}