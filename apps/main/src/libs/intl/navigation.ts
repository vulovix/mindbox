import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { Config } from '@main/utils';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: Config.locales,
    localePrefix: Config.localePrefix,
});
