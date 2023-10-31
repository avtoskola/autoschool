import Link from 'next/link';
import React, { ReactNode, useCallback, useState } from 'react';

import PrimaryButton from '@/components/common/buttons/primary-button';
import Modal from '@/components/common/modal';

interface Props {
    buttonLabel: string;
    modalContent: { text: ReactNode[]; title: ReactNode };
}

export default function DocumentsModal(props: Props) {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <>
      <PrimaryButton onClick={onOpen} className="max-w-full h-fit" size="8-20">
        {props.buttonLabel}
      </PrimaryButton>
      <Modal
        isOpen={open}
        onClose={onClose}
        headerContent={
          <p className="text-large font-semibold max-sm:text-mob-l text-white">
            {props.modalContent.title}
          </p>
        }
      >
        <div className="max-w-lg w-[50vw] max-md:w-[90vw] p-5 ">
          <ul className="list-disc pl-2">
            {props.modalContent.text.map((item, index) => (
              <li key={index} className="text-medium whitespace-pre-line max-sm:text-mob-m mb-2">{item}</li>
            ))}
          </ul>
          <Link href="/#documents" className="mt-5 ml-auto block w-fit">
            <PrimaryButton onClick={onClose} size="10-34">
              Базові документи
            </PrimaryButton>
          </Link>
        </div>
      </Modal>
    </>
  );
}
