import { BaseTemplate } from '@main/components';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate>
      {props.children}
    </BaseTemplate>
  );
}
