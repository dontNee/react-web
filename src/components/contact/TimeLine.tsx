import styles from '@/styles/timeline.module.scss'

export default function TimeLine() {
    return (
        <div className='pt-3 pb-5'>
            <TimeSection />
            <TimeSection oppositeContent={true} />
            <TimeSection />
            <TimeSection oppositeContent={true} />
        </div>
    );
}

// 时间段落
function TimeSection({ oppositeContent = false }) {
    return (
        <div className={`container-fluid ${styles["time-section"]}`}>
            <div className={`row g-0 ${styles["row-height"]}`}>
                <div className="col-5">
                    {oppositeContent ? <ContentCard opposite={true} /> : <TimeRecord />}
                </div>
                <div className="col-1">
                    <TimePointer />
                </div>
                <div className="col-6">
                    {oppositeContent ? <TimeRecord opposite={true} /> : <ContentCard />}
                </div>
            </div>
        </div>
    );
}

// 时间节点
function TimePointer() {
    return (
        <div className={styles["time-pointer"]}>
            <div className={styles["sperator-line"]}>
                <div></div>
                <div></div>
            </div>
            <div className={styles["round-point"]}>
                <button></button>
            </div>
            <div className={styles["sperator-line"]}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

// 内容卡片
function ContentCard({ opposite = false }) {
    return (
        <div className={`card ${styles["content-card"]}`}></div>
    );
}

// 时间内容
function TimeRecord({ opposite = false }) {
    return (
        <div className={`${opposite ? styles["opposite"] : ''} ${styles["time-record"]}`}>
            <div className={styles["content"]}>
                <span>2023年5月31日</span>
                <p>08:05:46</p>
            </div>
        </div>
    );
}