import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage().props;
    const userName = auth?.user?.name ?? 'Pengguna';

    const resolveRoute = (name, fallback) => {
        if (typeof route === 'function') {
            try {
                return route(name);
            } catch (error) {
                return fallback;
            }
        }

        return fallback;
    };

    const menuCards = [
        {
            title: 'Management PO',
            description:
                'Kelola purchase order, pantau status, dan percepat proses approval.',
            href: resolveRoute('management-po', '/management-po'),
            icon: (
                <svg
                    className="h-6 w-6 text-slate-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2Z" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
            ),
        },
        {
            title: 'Stock',
            description:
                'Monitoring stok real-time untuk memastikan ketersediaan barang.',
            href: resolveRoute('stock', '/stock'),
            icon: (
                <svg
                    className="h-6 w-6 text-slate-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
                    <path d="M12 12v9" />
                    <path d="M3 7.5V16.5L12 21l9-4.5V7.5" />
                </svg>
            ),
        },
        {
            title: 'Inventaris',
            description:
                'Catat aset dan perlengkapan untuk kontrol inventaris yang rapi.',
            href: resolveRoute('inventaris', '/inventaris'),
            icon: (
                <svg
                    className="h-6 w-6 text-slate-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 7h16" />
                    <path d="M7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
                    <path d="M6 7v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7" />
                </svg>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        Portal NH
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-900">
                        Selamat datang, {userName}
                    </h2>
                </div>
            }
        >
            <Head title="Home" />

            <div className="bg-slate-50 py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {menuCards.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                                        {card.icon}
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="mt-6 text-sm font-semibold text-slate-900">
                                    Buka menu →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
