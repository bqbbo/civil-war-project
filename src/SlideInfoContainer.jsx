export default function SlideInfoContainer({
    slideData,
    currentSlide,
    setCurrentSlide,
}) {
    return (
        <div className="slide-info-container">
            <div className="current-slide-info">
                <p>
                    Slide {currentSlide + 1} of {slideData.length}
                </p>
            </div>

            <div className="slide-directory">
                <h3>All Slides:</h3>
                <ol className="slide-list">
                    {slideData.map((slide, index) => (
                        <li
                            key={slide.key}
                            className={`slide-item ${
                                index === currentSlide ? "current" : ""
                            }`}
                        >
                            <span
                                className="slide-link"
                                onClick={() => setCurrentSlide(index)}
                                style={{
                                    cursor: index === currentSlide ? 'default' : 'pointer'
                                }}
                            >
                                {slide.title}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
