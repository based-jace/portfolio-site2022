import Image from "next/image";

export default function Footer() {
    return <footer>
        <div className="social-media-links">
            <a href="https://linkedin.com/in/jace-medlin" target="_blank" rel="noreferrer">
                <button>
                    <Image
                        src="/linkedin-logo.png"
                        alt="Pixelized Linkedin Logo in the style of the Nintendo Entertainment System"
                        width="80"
                        height="80"
                    />
                </button>
            </a>
            <a href="https://github.com/based-jace" target="_blank" rel="noreferrer">
                <button>
                    <Image
                        src="/github-logo.png"
                        alt="Pixelized GitHub Logo in the style of the Nintendo Entertainment System"
                        width="80"
                        height="80"
                    />
                </button>
            </a>
        </div>
        <div>
            © Jace Medlin 2022
        </div>
    </footer>
}