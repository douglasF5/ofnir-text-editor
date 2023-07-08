import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import html from 'highlight.js/lib/languages/xml';
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import { lowlight } from 'lowlight';
import 'highlight.js/styles/atom-one-dark.css';
import { initialContent } from './editorInitialContent';
import { BubbleMenuButton } from './BubbleMenuButton';
import { FloatingMenuButton } from './FloatingMenuButton';


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
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentTextLine = $from.nodeBefore?.textContent;
            return currentTextLine === '/';
          }}
          className='flex flex-col gap-1 p-2 overflow-hidden border rounded-lg shadow-lg border-zinc-600 bg-zinc-700'
        >
          <FloatingMenuButton
            label='Text'
            description='Just start writing with plain text.'
            callback={() => console.log('text block added')}
          />
          <FloatingMenuButton
            label='Heading'
            description='Big section heading.'
            callback={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          />
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          editor={editor}
          className='flex overflow-hidden border divide-x rounded-lg shadow-lg divide-zinc-600 border-zinc-600 bg-zinc-700'
        >
          <BubbleMenuButton
            actions={{
              label: 'Text',
              trailingIcon: 'chevronDown',
              iconSize: 4,
              isActive: false,
              callBack: () => console.log('text')
            }}
          />
          <BubbleMenuButton
            actions={{
              leadingIcon: 'chatBubble',
              label: 'Comment',
              iconSize: 4,
              isActive: false,
              callBack: () => console.log('comment')
            }}
          />
          <div className='flex align-items'>
            <BubbleMenuButton
              actions={{
                leadingIcon: 'fontBold',
                isActive: editor.isActive('bold'),
                callBack: () => editor.chain().focus().toggleBold().run()
              }}
            />
            <BubbleMenuButton
              actions={{
                leadingIcon: 'fontItalic',
                isActive: editor.isActive('italic'),
                callBack: () => editor.chain().focus().toggleItalic().run()
              }}
            />
            <BubbleMenuButton
              actions={{
                leadingIcon: 'strikeThrough',
                isActive: editor.isActive('strike'),
                callBack: () => editor.chain().focus().toggleStrike().run()
              }}
            />
            <BubbleMenuButton
              actions={{
                leadingIcon: 'code',
                isActive: editor.isActive('code'),
                callBack: () => editor.chain().focus().toggleCode().run()
              }}
            />
          </div>
        </BubbleMenu >
      )}
    </>
  );
};