'use client';

import React, { ChangeEvent, PropsWithChildren, Suspense } from 'react';
import dynamic from 'next/dynamic';
import './style.scss';

const NoteEditable = dynamic(() => import('./NoteEditable'), {
  loading: () => <div>Loading...</div>,
})

export interface NoteDetailsProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSave?: () => void;
  isEdit: boolean;
}
export function NoteDetails(props: PropsWithChildren<NoteDetailsProps>) {
  return <Suspense>
    <NoteEditable {...props} >{props.children}</NoteEditable>
  </Suspense>
}
