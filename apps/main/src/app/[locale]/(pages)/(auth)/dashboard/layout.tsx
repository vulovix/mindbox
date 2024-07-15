import { BaseTemplate } from '@main/components';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return <BaseTemplate>{props.children}</BaseTemplate>;
}
