import AnalyticsProvider from '@/src/component/AnalyticsProvider';

export default function AdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsProvider>
      <main>{children}</main>
    </AnalyticsProvider>
  );
}
