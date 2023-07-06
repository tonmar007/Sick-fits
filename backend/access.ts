import { permissionList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

export const permissions = {
  ...generatedPermissions,
  isAwsome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('Marko');
  },
};

export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    return { user: { id: session.itemId } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    return { status: 'AVAILABLE' };
  },
};
