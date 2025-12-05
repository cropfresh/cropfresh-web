'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StatsCard from '@/components/admin/StatsCard';
import { Users, UserCheck, TrendingUp, Eye, BarChart3 } from 'lucide-react';

interface DashboardStats {
    submissions: {
        total: number;
        byRole: Array<{ role: string; count: number }>;
        recent: Array<{
            name: string;
            email: string;
            role: string;
            location: string;
            createdAt: string;
        }>;
    };
    analytics: {
        totalPageViews: number;
        formStats: {
            started: number;
            submitted: number;
            abandoned: number;
            conversionRate: string;
        };
    };
}

export default function AdminDashboard() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Store password and fetch stats
        fetchStats(password);
    };

    const fetchStats = async (pass: string) => {
        try {
            const response = await fetch('/api/admin/stats', {
                headers: {
                    'Authorization': `Bearer ${pass}`,
                },
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setError('Invalid password');
                    setLoading(false);
                    return;
                }
                throw new Error('Failed to fetch stats');
            }

            const data = await response.json();
            setStats(data);
            setIsAuthenticated(true);
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary-green to-dark-green flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                            <BarChart3 size={32} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-bold font-display text-neutral-gray mb-2">
                            CropFresh Admin
                        </h1>
                        <p className="text-gray-600">Enter password to access dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green"
                                placeholder="Enter admin password"
                                required
                                style={{ color: 'black', backgroundColor: 'white' }}
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary-orange text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Authenticating...' : 'Access Dashboard'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold font-display text-neutral-gray">
                                CropFresh Admin Dashboard
                            </h1>
                            <p className="text-sm text-gray-600">User engagement & submissions overview</p>
                        </div>
                        <button
                            onClick={() => router.push('/')}
                            className="px-4 py-2 text-gray-600 hover:text-primary-green transition-colors"
                        >
                            Back to Site
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatsCard
                        title="Total Signups"
                        value={stats.submissions.total}
                        icon={<Users size={24} />}
                        colorClass="from-primary-green to-dark-green"
                    />

                    <StatsCard
                        title="Page Views"
                        value={stats.analytics.totalPageViews.toLocaleString()}
                        icon={<Eye size={24} />}
                        colorClass="from-primary-orange to-orange-600"
                    />

                    <StatsCard
                        title="Form Started"
                        value={stats.analytics.formStats.started}
                        icon={<UserCheck size={24} />}
                        subtitle={`${stats.analytics.formStats.submitted} submitted`}
                        colorClass="from-blue-500 to-blue-600"
                    />

                    <StatsCard
                        title="Conversion Rate"
                        value={stats.analytics.formStats.conversionRate}
                        icon={<TrendingUp size={24} />}
                        subtitle="Form completion"
                        colorClass="from-purple-500 to-purple-600"
                    />
                </div>

                {/* Role Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                    <h2 className="text-xl font-bold font-display text-neutral-gray mb-6">
                        Signups by Role
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {stats.submissions.byRole.map((item) => (
                            <div key={item.role} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="text-3xl font-bold text-primary-green mb-1">
                                    {item.count}
                                </div>
                                <div className="text-sm text-gray-600 capitalize">{item.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Submissions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h2 className="text-xl font-bold font-display text-neutral-gray mb-6">
                        Recent Submissions
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Email</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.submissions.recent.map((submission, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 px-4 text-sm text-gray-900">{submission.name}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{submission.email}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-green/10 text-primary-green capitalize">
                                                {submission.role}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{submission.location}</td>
                                        <td className="py-3 px-4 text-sm text-gray-500">
                                            {new Date(submission.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
