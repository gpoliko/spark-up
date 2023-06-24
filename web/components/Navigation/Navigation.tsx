import { FC } from 'react';
import { Button, Group, GroupProps } from '@mantine/core';
import Link from 'next/link';

import { HEADER_NAV_LINKS } from '@/lib/constants/navigation';

interface NavigationProps extends Partial<GroupProps> {}

export const Navigation: FC<NavigationProps> = ({ ...props }) => {
  return (
    <Group spacing='xs' {...props}>
      {HEADER_NAV_LINKS.map((link) => (
        <Button key={link.href} component={Link} href={link.href} variant='link'>
          {link.label}
        </Button>
      ))}
    </Group>
  );
};
