import SlideButton from "./SlideButton.jsx";
import BaseSlide from "./BaseSlide.jsx";

export default function SlideContainer({
    slideData,
    currentSlide,
    setCurrentSlide,
}) {
    function upperSlideBoundary() {
        return currentSlide >= slideData.length - 1;
    }

    function nextSlide() {
        if (!upperSlideBoundary()) {
            setCurrentSlide(currentSlide + 1);
        }
    }

    function lowerSlideBoundary() {
        return currentSlide <= 0;
    }

    function prevSlide() {
        if (!lowerSlideBoundary()) {
            setCurrentSlide(currentSlide - 1);
        }
    }

    const currentSlideData = slideData[currentSlide];

    return (
        <div className="slide-container">
            <div className="slide-content">
                <BaseSlide
                    title={currentSlideData.title}
                    className={currentSlideData.className}
                >
                    {currentSlideData.content}
                </BaseSlide>
            </div>
            <div className="slide-buttons">
                <SlideButton
                    onClick={prevSlide}
                    isDisabled={lowerSlideBoundary()}
                    changingDirection="backward"
                />
                <SlideButton
                    onClick={nextSlide}
                    isDisabled={upperSlideBoundary()}
                    changingDirection="forward"
                />
            </div>
        </div>
    );
}
