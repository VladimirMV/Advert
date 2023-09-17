import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, CloseBtn } from './Modal.styled';

export const Modal = ({ toggleModal, children }) => {
    useEffect(() => {
        const handleEscKeydown = evt => {
            const KEY_CODE = 'Escape';

            if (evt.key === KEY_CODE) {
                toggleModal();
            }
        };

        document.addEventListener('keydown', handleEscKeydown);
        document.documentElement.style.overflowY = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscKeydown);
            document.documentElement.style.overflowY = 'unset';
        };
    }, [toggleModal]);

    const handleBackdropClick = evt => {
        if (evt.target === evt.currentTarget) {
            toggleModal();
        }
    };

    const backdropRootPortal = document.querySelector('#backdrop-root');

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow>
                <CloseBtn onClick={toggleModal}>
                    <IoCloseOutline size={24} />
                </CloseBtn>
                {children}
            </ModalWindow>
        </Overlay>,
        backdropRootPortal
    );
};

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};