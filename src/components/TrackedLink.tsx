import Link from "next/link";
import { type ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  href: string;
};

export function TrackedLink({ href, ...props }: TrackedLinkProps) {
  // Only add tracking for external links
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  return (
    <Link
      {...props}
      href={href}
      {...(isExternal && {
        "data-umami-event": "outbound-link-click",
        "data-umami-event-url": href,
      })}
    />
  );
}
