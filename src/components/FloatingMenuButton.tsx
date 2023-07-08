type FloatingMenuButtonProps = {
  label: string,
  description: string,
  imagePath?: string,
  callback: () => void;
};

export function FloatingMenuButton({
  label,
  description,
  imagePath,
  callback
}: FloatingMenuButtonProps) {
  return (
    <button
      onClick={callback}
      className='flex items-center justify-start gap-2 px-1 py-1 rounded-md hover:bg-zinc-600'
    >
      {imagePath
        ? <img src={imagePath} alt={label} />
        : <div className='border rounded-sm w-11 h-11 bg-zinc-500 border-zinc-400'></div>
      }
      <div className='flex flex-col text-left'>
        <p>{label}</p>
        <p className='gap-1 text-sm text-zinc-400'>{description}</p>
      </div>
    </button>
  );
}