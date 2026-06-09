import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-20 p-4">
      <div className="max-w-5xl w-full mx-auto flex justify-between gap-4">
        <p className="text-xs text-text-muted">
          © 2025 renansouzasm. All Rights Reserved
        </p>

        <Link href={"https://github.com/renansouzasm"} target="_blank">
          <p className="text-xs transition-colors duration-300 text-text-muted hover:text-text-secondary">
            GitHub
          </p>
        </Link>
      </div>
    </footer>
  );
}
