import { splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'

type ShortTextAreaProps = {
    ref: HTMLTextAreaElement | undefined
    onInput: (value: string) => void
    fontSize?: number
} & Omit<JSX.InputHTMLAttributes<HTMLTextAreaElement>, 'onInput'>

export const ShortTextArea = (props: ShortTextAreaProps) => {
    const [local, others] = splitProps(props, ['ref', 'onInput'])

    return (
        <textarea
            ref={props.ref}
            class='focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input'
            style={{ 'font-size': props.fontSize ? `${props.fontSize}px` : '16px' }}
            onInput={(e) => local.onInput(e.currentTarget.value)}
            {...others}
        ></textarea>
    
    )
}
