import Link from "next/link";

export function StickyLinks() {
    return <div id="stickyLinks">
        <Link className="circleLink" href="https://www.facebook.com/edmond.brown.7" target="_blank">f</Link>
        <Link className="circleLink" id="link" href="https://uk.linkedin.com/in/edmund-brown-08a2892a/" target="_blank">in</Link>
        <Link className="circleLink" href="https://github.com/Jimbothemighty" target="_blank">gh</Link>
        <Link className="circleLink" href="mailto:ed@edmundbrown.com">✉️</Link>
    </div>
}