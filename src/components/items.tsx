"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RollingLink from "./rolling-link";
import { useSound } from "./hooks/use-sound";

export type ItemLink = {
  label?: string;
  href: string;
};

export type Item = {
  id?: string;
  name: string;
  description: string;
  href?: string;
  links?: ItemLink[];
  onClick?: () => void;
  target?: "_blank" | "_self";
};

type ItemsProps = {
  items: Item[];
  className?: string;
};

type ListItemProps = Omit<Item, "id">;

function ListItem({
  name,
  description,
  href,
  links,
  onClick,
  target = "_blank",
}: ListItemProps) {
  const { play } = useSound();

  const hasSingleLink = !!href && !links?.length;
  const isClickable = !hasSingleLink && !links?.length && !!onClick;

  const body = (
    <div className="group flex w-full flex-col justify-between gap-4 rounded border border-transparent px-4 py-4 transition-all duration-300 hover:border-white/25 hover:bg-card sm:flex-row sm:px-5">
      <h2 className="flex-1 font-mono text-base font-bold transition-colors group-hover:text-primary sm:text-lg">
        {name}
      </h2>
      <div className="flex-1">
        <p className="text-base">{description}</p>
        {!!links?.length && (
          <div>
            <div
              aria-hidden="true"
              className="mt-2 mb-2 border-t border-white/10"
            />
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <RollingLink
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-primary"
                >
                  {link.label ?? link.href}
                </RollingLink>
              ))}
            </div>
          </div>
        )}
      </div>
      {hasSingleLink && (
        <ArrowUpRight
          className="hidden h-5 w-5 shrink-0 text-foreground/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary sm:block"
          aria-hidden="true"
        />
      )}
      {isClickable && (
        <ArrowUpRight
          className="hidden h-5 w-5 shrink-0 text-foreground/40 sm:block"
          aria-hidden="true"
        />
      )}
      {!hasSingleLink && !isClickable && (
        <ArrowUpRight
          className="hidden h-5 w-5 shrink-0 invisible text-foreground/40 sm:block"
          aria-hidden="true"
        />
      )}
    </div>
  );

  if (hasSingleLink) {
    return (
      <Link
        href={href}
        target={target === "_blank" ? "_blank" : undefined}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className="block"
        onMouseEnter={() => play("hover")}
        onClick={() => play("open")}
      >
        {body}
      </Link>
    );
  }

  if (isClickable) {
    return (
      <button
        type="button"
        className="block w-full cursor-pointer text-left"
        onMouseEnter={() => play("hover")}
        onClick={() => {
          play("click");
          onClick();
        }}
      >
        {body}
      </button>
    );
  }

  return body;
}

export default function Items({ items, className }: ItemsProps) {
  return (
    <div className={`flex flex-col ${className ?? "gap-4"}`}>
      {items.map((item, index) => {
        const { id, ...itemProps } = item;

        return (
          <ListItem
            key={id ?? item.href ?? `${item.name}-${index}`}
            {...itemProps}
          />
        );
      })}
    </div>
  );
}
