import React, { ReactNode, useCallback, useState } from 'react';

import PrimaryButton from '@/components/common/buttons/primary-button';
import Modal from '@/components/common/modal';

interface Props {
    buttonLabel: string;
    modalContent: { text: ReactNode; title: ReactNode };
}

export default function CategoryModal(props: Props) {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <>
      <PrimaryButton onClick={onOpen} className="max-w-full h-fit flex-1" size="8-20">
        {props.buttonLabel}
      </PrimaryButton>
      <Modal isOpen={open} onClose={onClose}
        headerContent={
          <p className="text-2xlarge font-semibold max-sm:text-mob-2xl text-white">
            {props.modalContent.title}
          </p>
        }
      >
        <div className="max-w-lg w-[50vw] max-md:w-[90vw] p-5">
          <p className="text-medium whitespace-pre-line max-sm:text-mob-m">
            {props.modalContent.text}
          </p>
        </div>
      </Modal>
    </>
  );
}
