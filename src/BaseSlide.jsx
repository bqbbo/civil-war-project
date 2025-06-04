export default function BaseSlide({ title, children, className = "" }) {
    return (
        <div className={`slide ${className}`}>
            <div className="slide-header">
                <h1 className="slide-title">{title}</h1>
            </div>
            <div className="slide-content">{children}</div>
        </div>
    );
}
