import './Loader.css'
import Heading from "@/components/Heading"

export default function Loader () {
    return <section className="loader">
        <div>
            <span style={{ '--order': '1' } as React.CSSProperties}></span>
            <span style={{ '--order': '2' } as React.CSSProperties}></span>
            <span style={{ '--order': '3' } as React.CSSProperties}></span>
            <span style={{ '--order': '4' } as React.CSSProperties}></span>
        </div>
        <div>
            <Heading size="large">Hmphm...</Heading>
            <p data-font-accent="medium">Loading. . .</p>
        </div>
    </section>
}