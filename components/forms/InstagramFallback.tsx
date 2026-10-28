import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { INSTAGRAM } from "@/data/shops";

export function InstagramFallback({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="font-display text-2xl font-bold text-melting-red">{heading}</h2>
      <p className="text-ink/80">{body}</p>
      <a
        href={INSTAGRAM.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-melting-red px-6 font-display font-semibold text-cream"
      >
        <InstagramIcon size={20} /> Message us on Instagram
      </a>
    </div>
  );
}
