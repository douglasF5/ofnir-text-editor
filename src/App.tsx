import { Editor } from './components/Editor.tsx';

function App() {
  return (
    <div className='min-h-screen bg-zinc-800 text-zinc-50 grid grid-cols-[16rem_1fr]'>
      <aside className='p-4 border-r bg-zinc-900 border-zinc-700'>
        aside is here
      </aside>
      <main className='p-4 mx-auto w-full px-[32px]'>
        <Editor />
      </main>
    </div>
  );
}

export default App;


