import { AgsBoxProps, AgsBox } from 'ags-ts';

export const Box = (props: AgsBoxProps) => {
    return new AgsBox({
        ...props,
    })
}
