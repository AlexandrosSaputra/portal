import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    Management PO
                </h2>
            }
        >
            <Head title="Management PO" />

            <div className="bg-slate-50 py-10">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-slate-500">
                            Coming soon
                        </p>
                        <p className="mt-2 text-base text-slate-700">
                            Modul Management PO sedang disiapkan untuk proses
                            approval yang lebih cepat dan terstruktur.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
