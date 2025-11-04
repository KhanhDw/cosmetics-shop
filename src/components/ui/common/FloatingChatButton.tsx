import type { MouseEvent } from "react";
import clsx from "clsx";

/**
 * Floating chat button – reusable & accessible.
 *
 * Props
 * -----
 * - href?: string           // Link tới Messenger / Zalo / … (mặc định "#")
 * - onClick?: (e) => void   // Khi muốn dùng button thay vì link
 * - title?: string          // Tooltip & aria‑label (mặc định “Chat với tư vấn viên”)
 * - className?: string      // Thêm class tùy chọn
 */
export const FloatingChatButton: React.FC<{
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  title?: string;
  className?: string;
}> = ({
  href = "https://m.me/yourpage",
  onClick,
  title = "Chat với tư vấn viên",
  className,
}) => {
  // Nếu có onClick → dùng <button>, còn lại dùng <a>
  const Element = onClick ? "button" : "a";

  const baseClasses = clsx(
    "fixed bottom-6 right-6 z-50 flex items-center justify-center",
    "group focus-visible:outline-none",
    className
  );

  const btnClasses = clsx(
    "bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] text-white rounded-full shadow-lg",
    "p-4 md:p-5", // tăng padding trên màn hình lớn
    "hover:from-[var(--text-secondary)] hover:to-[var(--text-accent)] focus-visible:from-[var(--text-secondary)] focus-visible:to-[var(--text-accent)]",
    "hover:scale-105 focus-visible:scale-105",
    "transition-colors transition-transform",
    "duration-200 ease-out",
    "animate-[bounce_2s_ease-in-out_infinite]" // bounce nhẹ, không làm UI giật
  );

  const tooltipClasses = clsx(
    "absolute bottom-full right-0 mb-2",
    "whitespace-nowrap rounded bg-[var(--text-primary)] px-2 py-1 text-xs text-[var(--bg-primary)] !text-[var(--bg-primary)]",
    "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
    "transition-opacity duration-150",
    "dark:bg-[var(--text-primary)] dark:text-[var(--bg-primary)] !dark:text-[var(--bg-primary)]"
  );

  return (
    <div className={baseClasses}>
      <Element
        // Khi là <a> sẽ có href, nếu là <button> thì bỏ href
        {...(Element === "a"
          ? { href, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onClick={onClick}
        className={clsx(btnClasses, "relative")}
        aria-label={title}
        title={title}
        // Thêm shortcut keyboard: Enter & Space đều hoạt động trên <button>
        // (đối với <a> thì trình duyệt đã hỗ trợ)
      >
        <ChatIcon
          className="w-6 h-6"
          aria-hidden={true}
        />

        {/* Tooltip */}
        <span className={tooltipClasses}>{title}</span>
      </Element>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Icon component – tách ra để tái sử dụng và giảm clutter           */
/* ------------------------------------------------------------------ */
const ChatIcon: React.FC<{ className?: string; "aria-hidden"?: boolean }> = ({
  className,
  "aria-hidden": ariaHidden = true,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("fill-current", className)}
    viewBox="0 0 24 24"
    stroke="none"
    aria-hidden={ariaHidden}
  >
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
