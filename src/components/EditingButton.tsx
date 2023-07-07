import {
  RxFontBold,
  RxFontItalic,
  RxCode,
  RxStrikethrough,
  RxChatBubble,
  RxChevronDown
} from 'react-icons/rx';

type Icons =
  'fontBold'
  | 'fontItalic'
  | 'code'
  | 'strikeThrough'
  | 'chatBubble'
  | 'chevronDown';

type EditingActions = {
  label?: string,
  leadingIcon?: Icons,
  trailingIcon?: Icons,
  iconSize?: number,
  isActive: boolean,
  callBack: () => void;
};

type EditingButtonProps = {
  actions: EditingActions;
};

export function EditingButton({ actions }: EditingButtonProps) {
  const { label, leadingIcon, trailingIcon, callBack, iconSize, isActive } = actions;
  const iconSizeBubbleMenu = iconSize ?? 5;
  const iconsStyle = `w-${iconSizeBubbleMenu} h-${iconSizeBubbleMenu}`;
  const icons = {
    'fontBold': <RxFontBold />,
    'fontItalic': <RxFontItalic />,
    'code': <RxCode className={iconsStyle} />,
    'strikeThrough': <RxStrikethrough />,
    'chatBubble': <RxChatBubble />,
    'chevronDown': <RxChevronDown />
  };

  return (
    <button
      onClick={callBack}
      className='flex items-center justify-center gap-2 px-2 py-1 hover:bg-zinc-600 data-[is-active="true"]:text-cyan-300'
      data-is-active={isActive}
    >
      {leadingIcon && icons[leadingIcon]}
      {label}
      {trailingIcon && icons[trailingIcon]}
    </button>
  );
};
