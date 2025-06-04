import { useState } from "react";
import SlideContainer from "./SlideContainer.jsx";
import SlideInfoContainer from "./SlideInfoContainer.jsx";
import { slideData } from "./Slides.jsx";

export default function ProjectContent() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="main-content">
            <SlideContainer
                slideData={slideData}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
            <SlideInfoContainer
                slideData={slideData}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
        </div>
    );
}
