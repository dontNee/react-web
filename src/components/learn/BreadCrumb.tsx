import styles from "@/styles/breadcrumb.module.css"

export default function BreadCrumb() {

    return (
        <nav className={styles["breadcrumb-nav-cls"]} aria-label= "breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>
    );
}