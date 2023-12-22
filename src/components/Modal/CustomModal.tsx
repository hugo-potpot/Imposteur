interface ModalProps {
    show: boolean;
    onHide: () => void;
    text: string;
}

function Modal(props: ModalProps) {
    return (
        <div
            className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center ${
                props.show ? 'block' : 'hidden'
            }`}
        >
            <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="flex justify-end">
                    <button onClick={props.onHide} className="p-2">
                        X
                    </button>
                </div>
                <div className="modal-content py-4 px-6">
                    <p className="text-gray-700 text-center text-xl">{props.text}</p>
                </div>
            </div>
        </div>
    );

}

export default Modal;
