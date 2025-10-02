import { ReactNode } from "react";

interface ServiceMediaProps {
  imageSrc: string;
  alt: string;
  caption?: string;
  side?: "left" | "right";
  children: ReactNode;
}

const ServiceMedia = ({ 
  imageSrc, 
  alt, 
  caption, 
  side = "left", 
  children 
}: ServiceMediaProps) => {
  const imageColumn = (
    <div className="w-full">
      <figure className="w-full">
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3] lg:aspect-[16/10]"
        />
        {caption && (
          <figcaption className="text-sm text-muted-foreground mt-3 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );

  const contentColumn = (
    <div className="w-full flex items-center">
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        side === "right" ? "lg:grid-flow-col-dense" : ""
      }`}>
        {side === "left" ? (
          <>
            {imageColumn}
            {contentColumn}
          </>
        ) : (
          <>
            <div className="lg:col-start-2">
              {contentColumn}
            </div>
            <div className="lg:col-start-1">
              {imageColumn}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceMedia;
