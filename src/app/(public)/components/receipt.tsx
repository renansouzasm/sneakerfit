export function Receipt() {
  <div className="flex w-full justify-center px-4 py-10">
    <div className="w-full max-w-148.75 rounded-xl px-10 py-12 bg-surface-primary">
      <div className="mb-10 flex items-center gap-3">
        💾
        <span className="font-serif text-2xl font-bold tracking-tight"></span>
      </div>

      <h1 className="font-serif text-2xl font-bold">Borrow Receipt</h1>

      <div className="mt-4 space-y-2 text-sm">
        <p className="text-muted-foreground">
          Receipt ID:{" "}
          <span className="font-semibold text-primary">[#12345]</span>
        </p>
        <p className="text-muted-foreground">
          Date Issued:{" "}
          <span className="font-semibold text-primary">[DD/MM/YYYY]</span>
        </p>
      </div>

      <hr className="my-8 border-border" />

      <h2 className="font-serif text-lg font-bold">Book Details:</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {[
          ["Title", "[Book Title]"],
          ["Author", "[Book Author]"],
          ["Genre", "[Book Genre]"],
          ["Borrowed On", "[Borrow Date]"],
          ["Due Date", "[Due Date]"],
          ["Duration", "[X Days]"],
        ].map(([label, value]) => (
          <li
            key={label}
            className="flex items-start gap-2 text-muted-foreground"
          >
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
            <span>
              {label}:{" "}
              <span className="font-semibold text-primary">{value}</span>
            </span>
          </li>
        ))}
      </ul>

      <hr className="my-8 border-border" />

      <h2 className="font-serif text-lg font-bold">Terms</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          "Please return the book by the due date.",
          "Lost or damaged books may incur replacement costs.",
        ].map((term) => (
          <li
            key={term}
            className="flex items-start gap-2 text-muted-foreground"
          >
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
            <span>{term}</span>
          </li>
        ))}
      </ul>

      <hr className="my-8 border-border" />

      <div className="space-y-1 text-sm text-muted-foreground">
        <p>
          Thank you for using{" "}
          <span className="font-semibold text-foreground">BookWise</span>!
        </p>
        <p>
          Website:{" "}
          <span className="font-semibold text-primary">
            [bookwise.example.com]
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="font-semibold text-primary">
            support@bookwise.example.com
          </span>
        </p>
      </div>
    </div>
  </div>;
}
