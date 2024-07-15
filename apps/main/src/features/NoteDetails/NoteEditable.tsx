'use client';

import React, { ChangeEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import './style.scss';
import { useContentEditable } from '@main/hooks';

export interface NoteEditableProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSave?: () => void;
  isEdit: boolean;
}
export default function NoteEditable(props: PropsWithChildren<NoteEditableProps>) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    // fetch('/api/notes/1').then(res => res.json()).then(setState);
  }, []);


  useEffect(() => {
    if (props.children) {
      const event = new Event('input');
      textareaRef.current?.dispatchEvent(event);
      setMarkdownPreview();
    }
  }, [props.children]);

  const markdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange?.(e);
  }

  const setMarkdownPreview = () => {
    if (typeof window?.marked !== 'undefined') {
      if (markdownRef?.current) {
        markdownRef.current.innerHTML = window.marked(textareaRef.current?.value);
        setLastUpdate(Date.now());
        window.Prism.highlightAll();
      }
    }
  }

  const onSave = () => {
    setMarkdownPreview();
    props.onSave?.();
  }

  const editableProps = useContentEditable(onChange, onSave);
  return <>
    <textarea style={{ height: props.isEdit ? undefined : '0px', display: props.isEdit ? undefined : 'none' }} defaultValue={(props.children as string) || undefined} {...editableProps} ref={textareaRef} className="note-details editable" placeholder='Your note content goes here.' />
    <div style={{ height: props.isEdit ? '0px' : undefined }} className="note-details preview " ref={markdownRef}></div>
  </>
}
