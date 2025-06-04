export default function SlideButton({
    onClick,
    isDisabled,
    changingDirection,
}) {
    if (changingDirection === "backward") {
        return (
            <button
                className="slide-button"
                onClick={onClick}
                disabled={isDisabled}
            >
                Previous
            </button>
        );
    }

    return (
        <button
            className="slide-button"
            onClick={onClick}
            disabled={isDisabled}
        >
            Next
        </button>
    );
}
