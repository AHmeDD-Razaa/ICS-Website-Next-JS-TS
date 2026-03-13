import DashboardBanner from "../components/DashboardBanner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section>
      <DashboardBanner />
      {children}
    </section>
  );
}



