import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
    color: 'blue',
    textDecoration: 'underline',
}

interface Props {
    text: string,
    href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { pathname } = useRouter();

    return (
        <Link href={href}>
            <a style={href === pathname ? style : undefined}>{text}</a>
        </Link>
    )
}
