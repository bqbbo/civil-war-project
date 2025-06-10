export default function ImageContainer({ imageSource, altText, w, h }) {
    return (
        <div className="image-container">
            <img
                src={imageSource}
                alt={altText}
                width={w}
                height={h}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                    margin: "0 auto",
                }}
                onError={(e) => {
                    console.error("Image failed to load:", imageSource);
                    e.target.style.display = "none";
                }}
                onLoad={() => {
                    console.log("Image loaded successfully:", imageSource);
                }}
            />
        </div>
    );
}
