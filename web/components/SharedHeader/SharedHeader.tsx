import { FC } from 'react';
import { Container, Group, Header, HeaderProps } from '@mantine/core';
import { Navigation } from '../Navigation';

interface SharedHeaderProps extends Partial<HeaderProps> {}

export const SharedHeader: FC<SharedHeaderProps> = ({ ...props }) => {
  return (
    <Header {...props} height={60}>
      <Container size='xl'>
        <Group noWrap h='100%'>
          <Group
            sx={{
              height: '100%',
              width: '100%',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
            }}
          >
            <Navigation />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};
