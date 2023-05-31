export default function Section({ title = "Section Title", children } : any ) {

    return (
        <div className="container-fluid p-0">
            
            <h3 className="mb-4 mt-4">{title}</h3>
            
            {children}

        </div>
    );
}