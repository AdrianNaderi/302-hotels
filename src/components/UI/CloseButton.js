const CloseButton = (props) => {
  return (
    <button
      type="button"
      className={`close ${props.className}`}
      aria-label="Close"
      onClick={props.onClick}
    >
      <span aria-hidden="true" className="fs-3">
        &times;
      </span>
    </button>
  );
};

export default CloseButton;
