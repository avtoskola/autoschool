import { useRouter } from 'next/router';
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

import CustomDialog from '@/components/common/dialog';

export default function SearchDialog() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchString, setSearchString] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchString) {
      router.push(`/search?s=${searchString}`);
      setSearchOpen(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value);

  return (
    <>
      <div className="flex flex-grow lg:flex-grow-0 justify-end text-[20px] cursor-pointer"
        onClick={() => setSearchOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      </div>
      <CustomDialog onClose={() => setSearchOpen(false)} isOpen={searchOpen}>
        <div
          className="fixed inset-0 z-10 m-auto w-full max-w-md h-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <h3 className=" items-center justify-between flex text-lg font-medium leading-6 text-gray-900 mb-6">
            Search
            <div onClick={() => setSearchOpen(false)}
              className="cursor-pointer text-[20px] relative bottom-1 left-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </div>
          </h3>
          <input
            className="border-b-2 border-yellow w-full focus:border-blue-500 outline-0"
            type="text"
            placeholder="Search"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
          />
        </div>
      </CustomDialog>
    </>
  );
}
