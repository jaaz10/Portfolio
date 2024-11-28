'use client'

import { Fragment } from 'react'
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'

export function Dialog({ open, onClose, className, children }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <HeadlessDialog
        as="div"
        className={className}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {children}
        </Transition.Child>
      </HeadlessDialog>
    </Transition>
  )
}

// Add Dialog.Panel component
Dialog.Panel = function DialogPanel({ className, children }) {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <HeadlessDialog.Panel className={className}>
          {children}
        </HeadlessDialog.Panel>
      </div>
    </div>
  )
}

// Add Dialog.Title component
Dialog.Title = function DialogTitle({ as, className, children }) {
  return (
    <HeadlessDialog.Title
      as={as || 'h3'}
      className={className}
    >
      {children}
    </HeadlessDialog.Title>
  )
}

// Add Dialog.Description component
Dialog.Description = function DialogDescription({ as, className, children }) {
  return (
    <HeadlessDialog.Description
      as={as || 'p'}
      className={className}
    >
      {children}
    </HeadlessDialog.Description>
  )
} 