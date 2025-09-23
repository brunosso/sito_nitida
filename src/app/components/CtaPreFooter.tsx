import Link from "next/link"

interface CtaPreFooterProps {
  title: string;
  description: string;
  link1: string;
  label1: string;
  link2?: string;
  label2?: string;
}

export default function CtaPreFooter({ title, description, link1, label1, link2, label2 }: CtaPreFooterProps) {

  return (
  <section className="py-16 bg-primary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-foreground-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={link1} 
              className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-500 transition-colors">
              {label1}
            </Link>
            {link2 && label2 && (
            <Link 
              href={link2} 
              className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors">
                {label2}
              </Link>
            )}
          </div>
        </div>
      </section>
);
}