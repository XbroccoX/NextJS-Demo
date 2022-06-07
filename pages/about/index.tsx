import Link from '../../node_modules/next/link'
import { MainLayout } from '../../Components/layout/MainLayout'
import { DarkLayout } from '../../Components/layout/DarkLayout'
export default function AboutPage() {
    return (
        <>
            <h1> About Page</h1>
            <h1 className="title">
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
                Get started by editing{' '}
                <code className="code">pages/about.jsx</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

