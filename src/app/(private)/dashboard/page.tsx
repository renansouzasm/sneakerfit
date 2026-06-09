export default function DashboardPage() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="order-1 w-full aspect-video rounded-xl row-span-2 p-4 bg-surface-primary">
          1
        </div>
        <div className="order-3 md:order-2 w-full aspect-8/7 rounded-xl row-span-3 p-4 bg-surface-primary">
          2
        </div>
        <div className="order-2 md:order-3 grid grid-cols-2 gap-4">
          <div className="w-full aspect-video rounded-xl p-4 bg-surface-primary">
            3
          </div>
          <div className="w-full aspect-video rounded-xl p-4 bg-surface-primary">
            4
          </div>
        </div>
        <div className="order-4 w-full aspect-video rounded-xl row-span-3 p-4 bg-surface-primary">
          5
        </div>
        <div className="order-5 w-full aspect-video rounded-xl row-span-3 p-4 bg-surface-primary">
          6
        </div>
      </div>
    </>
  );
}
