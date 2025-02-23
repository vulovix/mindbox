'use client';

import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@main/libs/intl';
import { Config } from '@main/utils';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        router.push(pathname, { locale: event.target.value });
        router.refresh();
    };

    return (
        <select
            defaultValue={locale}
            onChange={handleChange}
            className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
        >
            {Config.locales.map((elt) => (
                <option key={elt} value={elt}>
                    {elt.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
