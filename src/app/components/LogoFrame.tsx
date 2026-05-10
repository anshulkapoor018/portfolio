import Image from 'next/image';

interface LogoFrameProps {
  src: string;
  alt: string;
}

const LogoFrame: React.FC<LogoFrameProps> = ({ src, alt }) => {
  return (
    <div className="portfolio-logo-frame flex-none w-20 h-20 mr-4 overflow-hidden rounded-xl p-2 shadow-sm">
      <div className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes="64px" className="object-contain" />
      </div>
    </div>
  );
}

export default LogoFrame;
