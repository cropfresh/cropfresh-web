'use client';

import { FC, ReactNode } from 'react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    subtitle?: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    colorClass?: string;
}

const StatsCard: FC<StatsCardProps> = ({
    title,
    value,
    icon,
    subtitle,
    trend,
    colorClass = 'from-primary-green to-dark-green',
}) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <h3 className="text-3xl font-bold font-display text-neutral-gray">{value}</h3>
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                </div>
                <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} text-white`}
                >
                    {icon}
                </div>
            </div>

            {trend && (
                <div className="flex items-center gap-1 text-sm">
                    <span className={trend.isPositive ? 'text-success' : 'text-red-500'}>
                        {trend.isPositive ? '↑' : '↓'} {trend.value}
                    </span>
                    <span className="text-gray-500">vs last week</span>
                </div>
            )}
        </div>
    );
};

export default StatsCard;
