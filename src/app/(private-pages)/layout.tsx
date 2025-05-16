'use client';

import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import Dashboard from '@/app/(private-pages)/page';
import Users from '@/app/(private-pages)/cmn/users/page';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'HOME',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'COMMON',
  },
  {
    segment: 'cmn/users',
    title: 'Users',
    icon: <PersonIcon />,
  },
];

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const getPageComponent = (pathname: string) => {
  switch (pathname) {
    case '/dashboard':
      return (<Dashboard />);
    case '/cmn/users':
      return (<Users />);
  }
};

const PageContent = (({ pathname }: { pathname: string }) => {
  return (
    <Box
      sx={{
        px: 2.5,
        py: 2.5,
      }}
    >
      {getPageComponent(pathname)}
    </Box>
  );
});

export default function PrivatePagesLayout({ }: Readonly<{}>) {
  const router = useDemoRouter('/dashboard');

  return (
    <DemoProvider>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={theme}
      >
        <DashboardLayout>
          <PageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}
