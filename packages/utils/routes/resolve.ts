const fs = require('fs');
const path = require('path');

export function resolveRoutes(
  tenantName: string,
  pathname: string,
  commonPages: boolean | undefined,
): string {
  const pageExistsInTenant = fs.existsSync(
    path.join(process.cwd(), 'pages', tenantName, `${pathname}.js`),
  );

  if (commonPages && !pageExistsInTenant && pathname !== '/') {
    return `${pathname}`;
  }

  return pathname === '/' ? `/${tenantName}` : `/${tenantName}${pathname}`;
}

export default resolveRoutes;
