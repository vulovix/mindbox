"use client";

import { useMemo, useState } from 'react';
import { Button } from '@main/components';
import { useContentEditable } from '@main/hooks';
import { NoteDetails } from '@main/features/NoteDetails';
import { RiBookOpenLine, RiEditLine } from 'react-icons/ri';
import './styles.scss';

type WorkspaceNoteProps = {
  params: { id: string; locale: string };
};

const WorkspaceNote = (props: WorkspaceNoteProps) => {

  const state = useMemo(() => {
    const storage = globalThis.window ? localStorage.getItem("TEMP_NOTE_" + props.params.id) : null;
    return storage ? JSON.parse(storage) : {
      title: 'New note',
      content: ``,
    };
  }, [])

  const onTitleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    state.title = e.currentTarget.textContent || '';
  }

  const onSave = () => {
    // send request to save
    localStorage.setItem("TEMP_NOTE_" + props.params.id, JSON.stringify(state))
  }

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    state.content = e.target.value || '';
  }

  const titleEditableProps = useContentEditable(onTitleChange, onSave);
  const [isEdit, setIsEdit] = useState(false);
  const onModeChange = () => {
    setIsEdit(!isEdit);
  }

  return (
    <div className="workspace-note">
      <div className="note-header">
        <h1 className="note-title" {...titleEditableProps} contentEditable={isEdit}>
          {state.title}
        </h1>
        <div className="note-controls">
          <Button className='note-control' onClick={onModeChange}>
            {isEdit ? <RiEditLine /> : <RiBookOpenLine />}
          </Button>
        </div>
      </div>
      <NoteDetails isEdit={isEdit} onChange={onContentChange} onSave={onSave}>
        {state.content}
      </NoteDetails>
    </div>
  );
};

export default WorkspaceNote;
