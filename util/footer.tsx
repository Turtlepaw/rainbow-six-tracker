import Image from "next/image";

export default function Footer(){
    return (
        <footer className="footer">
        <a
          href="https://vercel.com?utm_source=rainbow-six-tracker&utm_medium=footer&utm_campaign=rainbow-six-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="vercel"/>
          </span>
        </a>
      </footer>
    );
}