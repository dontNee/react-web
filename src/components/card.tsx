export default function Card({ title, children }: any) {

    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}