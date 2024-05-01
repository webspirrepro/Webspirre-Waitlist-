import { ModalType } from "../../types/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { VideoPlayer } from "..";
import { ImCancelCircle } from "react-icons/im";

const VideoModal: React.FC<ModalType> = ({ open, toogleModal }) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={toogleModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toogleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-full md:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center p-3 border-b mb-5 w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-xs font-medium leading-6 text-gray-900"
                    >
                      Watch how it works
                    </Dialog.Title>
                    <ImCancelCircle
                      onClick={toogleModal}
                      className="cursor-pointer"
                    />
                  </div>
                  <VideoPlayer />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VideoModal;
