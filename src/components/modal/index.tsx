import "./style.css";

export type ModalProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: JSX.Element;
};

export const Modal: React.VFC<ModalProps> = ({
  show,
  setShow,
  title,
  content,
}) => {
  const onClose = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div className="overlay" onClick={onClose}>
        <div className="body" onClick={(e) => e.stopPropagation()}>
          <div className="header">
            <div className="title">{title}</div>
            <div className="close" onClick={onClose}>
              <img
                src="../../public/close.svg"
                width="20"
                height="20"
                title="closeIcon"
              />
            </div>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
