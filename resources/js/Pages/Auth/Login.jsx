import ApplicationLogo from '@/Components/ApplicationLogo';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function Login({ status }) {
    const appName = import.meta.env.VITE_APP_NAME || 'Portal';
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[color:var(--login-bg)]">
            <Head title="Masuk" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_0%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
            <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[color:var(--login-glow-1)] opacity-40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-[color:var(--login-glow-2)] opacity-40 blur-3xl" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    <div className="animate-fade-up rounded-3xl bg-[color:var(--login-card-soft)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.35)] ring-1 ring-white/15 sm:p-10">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center">
                                <ApplicationLogo className="w-24 fill-current" />
                            </div>
                            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                                Masuk
                            </p>
                            <h1 className="mt-3 font-display text-3xl font-semibold text-[color:var(--login-ink)]">
                                {appName}
                            </h1>
                            <p className="mt-2 text-sm text-slate-500">
                                Gunakan username yang diberikan administrator.
                            </p>
                        </div>

                        {status && (
                            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                {status}
                            </div>
                        )}

                        {errors.auth && (
                            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                {errors.auth}
                            </div>
                        )}

                        <form onSubmit={submit} className="mt-8 space-y-5">
                            <div className="animate-fade-up animate-delay-100">
                                <InputLabel
                                    htmlFor="username"
                                    value="Username"
                                    className="text-slate-700"
                                />
                                <TextInput
                                    id="username"
                                    name="username"
                                    placeholder="Masukkan username"
                                    value={data.username}
                                    className="mt-2 block w-full rounded-xl border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[color:var(--login-accent)] focus:ring-[color:var(--login-accent)]"
                                    autoComplete="username"               
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('username', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.username}
                                    className="mt-2"
                                />
                            </div>

                            <div className="animate-fade-up animate-delay-200">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="text-slate-700"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan password"
                                    name="password"
                                    value={data.password}
                                    className="mt-2 block w-full rounded-xl border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[color:var(--login-accent)] focus:ring-[color:var(--login-accent)]"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-500">
                                <label className="inline-flex items-center gap-2">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                'remember',
                                                e.target.checked,
                                            )
                                        }
                                        className="border-slate-300 text-[color:var(--login-accent)] focus:ring-[color:var(--login-accent)]"
                                    />
                                    <span>Ingat saya</span>
                                </label>
                            </div>

                            <PrimaryButton
                                className="mt-2 w-full justify-center rounded-xl bg-[color:var(--login-ink)] px-4 py-3 text-sm font-semibold normal-case tracking-normal text-white shadow-lg hover:bg-slate-900 focus:ring-[color:var(--login-accent)]"
                                disabled={processing}
                                aria-busy={processing}
                            >
                                {processing ? 'Masuk...' : 'Masuk'}
                            </PrimaryButton>
                        </form>
                    </div>
                    <p className="mt-6 text-center text-xs text-white/60">
                        Akses hanya untuk pengguna terotorisasi.
                    </p>
                </div>
            </div>
        </div>
    );
}
