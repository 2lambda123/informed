import { NavLink } from './NavLink';

export const GettingStartedNav = () => {
  return (
    <ul className="spectrum-SideNav">
      <NavLink href="/getting-started/intro">Intro</NavLink>
      <NavLink href="/getting-started/setup">Setup</NavLink>
      <NavLink href="/getting-started/hooks">Hooks</NavLink>
      <NavLink href="/getting-started/formState">Form State</NavLink>
      <NavLink href="/getting-started/formApi">Form Api</NavLink>
      <NavLink href="/getting-started/fieldState">Field State</NavLink>
      <NavLink href="/getting-started/fieldApi">Field Api</NavLink>
      <NavLink href="/getting-started/path-syntax">Path Syntax</NavLink>
    </ul>
  );
};
