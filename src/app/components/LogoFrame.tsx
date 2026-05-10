import Image from 'next/image';

interface LogoFrameProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md';
}

const LogoFrame: React.FC<LogoFrameProps> = ({ src, alt, size = 'md' }) => {
  const frameSize = size === 'sm' ? 'w-16 h-16' : 'w-20 h-20';
  const imageSize = size === 'sm' ? '52px' : '64px';

  return (
    <div className={`portfolio-logo-frame flex-none ${frameSize} overflow-hidden rounded-xl p-2 shadow-sm`}>
      <div className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes={imageSize} className="object-contain" />
      </div>
    </div>
  );
}

export default LogoFrame;
