import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import html from 'highlight.js/lib/languages/xml';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import { lowlight } from 'lowlight';
import 'highlight.js/styles/atom-one-dark.css';
import { EditingButton } from './EditingButton';
import { initialContent } from './editorInitialContent';

lowlight.registerLanguage('html', html);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      })
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  });

  return (
    <>
      <EditorContent
        className='mx-auto pt-16 prose prose-invert !max-w-[700px] prose-cyan'
        editor={editor}
      />
      {editor && (
        <BubbleMenu
          editor={editor}
          className='flex overflow-hidden border divide-x rounded-lg shadow-lg divide-zinc-600 border-zinc-600 bg-zinc-700'
        >
          <EditingButton
            actions={{
              label: 'Text',
              trailingIcon: 'chevronDown',
              iconSize: 4,
              isActive: false,
              callBack: () => console.log('text')
            }}
          />
          <EditingButton
            actions={{
              leadingIcon: 'chatBubble',
              label: 'Comment',
              iconSize: 4,
              isActive: false,
              callBack: () => console.log('comment')
            }}
          />
          <div className='flex align-items'>
            <EditingButton
              actions={{
                leadingIcon: 'fontBold',
                isActive: editor.isActive('bold'),
                callBack: () => editor.chain().focus().toggleBold().run()
              }}
            />
            <EditingButton
              actions={{
                leadingIcon: 'fontItalic',
                isActive: editor.isActive('italic'),
                callBack: () => editor.chain().focus().toggleItalic().run()
              }}
            />
            <EditingButton
              actions={{
                leadingIcon: 'strikeThrough',
                isActive: editor.isActive('strike'),
                callBack: () => editor.chain().focus().toggleStrike().run()
              }}
            />
            <EditingButton
              actions={{
                leadingIcon: 'code',
                isActive: editor.isActive('code'),
                callBack: () => editor.chain().focus().toggleCode().run()
              }}
            />
          </div>
        </BubbleMenu >
      )
      }
    </>
  );
};