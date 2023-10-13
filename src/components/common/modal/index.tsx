import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import Dialog from '@/components/common/dialog';
import { CloseButton } from '@/components/common/modal/close-button';

interface Props extends ComponentProps<typeof Dialog>, PropsWithChildren {
    headerContent?: ReactNode
}

export default function Modal({ children, headerContent, ...dialogProps }: Props) {
  return (
    <Dialog {...dialogProps} >
      <div role="dialog" className="fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-xl shadow-2xl max-h-[90vh] flex flex-col">
          {headerContent
            ? (
              <div className="flex rounded-t-xl items-center justify-between p-2 border-b-2 border-b-gray-secondary bg-gradient-green-blue-tiles bg-center bg-cover">
                {headerContent}
                <CloseButton onClick={dialogProps.onClose}/>
              </div>
            )
            : null
          }
          <div className="max-h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
