export default function ImageContainer({ image, altText }) {
    return (
        <div className="image-container">
            <img src={image} alt={altText} />
            <style jsx>{`
                .image-container {
                    text-align: center;
                    margin: 20px 0;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
}
