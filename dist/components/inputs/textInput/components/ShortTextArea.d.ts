import { JSX } from 'solid-js/jsx-runtime';
type ShortTextAreaProps = {
    ref: HTMLTextAreaElement | undefined;
    onInput: (value: string) => void;
    fontSize?: number;
} & Omit<JSX.InputHTMLAttributes<HTMLTextAreaElement>, 'onInput'>;
export declare const ShortTextArea: (props: ShortTextAreaProps) => JSX.Element;
export {};
//# sourceMappingURL=ShortTextArea.d.ts.map