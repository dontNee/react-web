import styles from '@/styles/timeline.module.scss'

export default function TimeLine({ message }: any) {
    // 时间节点
    const timeSections = message.map((item: any, index: number) => {
        // 返回
        return (
            <TimeSection oppositeContent={index%2 ==0 ? true: false} data={item} key={item.id}></TimeSection>
        );
    })

    return (
        <div className={`pt-3 pb-5 ${styles["time-line-height"]}`}>
            {timeSections}
        </div>
    );
}

// 时间段落
function TimeSection({ oppositeContent = false, data }: any) {
    return (
        <div className={`container-fluid ${styles["time-section"]}`}>
            <div className={`row g-0 ${styles["row-height"]}`}>
                <div className="col-5">
                    {oppositeContent ? <ContentCard opposite={true} data={data} /> : <TimeRecord data={data} />}
                </div>
                <div className="col-1">
                    <TimePointer />
                </div>
                <div className="col-6">
                    {oppositeContent ? <TimeRecord opposite={true} data={data} /> : <ContentCard data={data} />}
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
function ContentCard({ opposite = false, data }: any) {
    return (
        <div className={`card ${styles["content-card"]}`}>
            <div className="card-body">
                <h5 className="card-title">{ `${data.sendBy} :` }</h5>
                <p className="card-text">{ data.data }</p>
            </div>
        </div>
    );
}

// 时间内容
function TimeRecord({ opposite = false, data }: any) {
    return (
        <div className={`${opposite ? styles["opposite"] : ''} ${styles["time-record"]}`}>
            <div className={styles["content"]}>
                <span>{data && data.recordDate}</span>
                <p>{data && data.recordTime}</p>
            </div>
        </div>
    );
}