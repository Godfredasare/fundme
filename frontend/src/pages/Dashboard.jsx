import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Heart, Users, TrendingUp,
         Edit2, ExternalLink, Copy, Check, Clock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { getMyStats } from "../api/profile";
import { getTransactions } from "../api/transactions";
import { formatCurrency, formatDate } from "../utils/formatters";
import StatCard from "../components/ui/StatCard";
import AppButton from "../components/ui/AppButton";
import SectionContainer from "../components/ui/SectionContainer";
import { AppCard, CardHeader, CardBody } from "../components/ui/AppCard";
import EmptyState from "../components/ui/EmptyState";
import Avatar from "../components/ui/Avatar";
import { DashboardSkeleton } from "../components/common/Skeleton";
import { useToast } from "../hooks/useToast";

export default function Dashboard() {
  const { user } = useAuth();
  const { success } = useToast();
  const [stats, setStats]             = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal]             = useState(0);
  const [page, setPage]               = useState(1);
  const [loading, setLoading]         = useState(true);
  const [copied, setCopied]           = useState(false);

  const profileUrl = `${window.location.origin}/u/${user?.username}`;

  useEffect(() => {
    (async () => {
      try {
        const [s, t] = await Promise.all([getMyStats(), getTransactions(page)]);
        setStats(s.data.stats);
        setTransactions(t.data.transactions);
        setTotal(t.data.total);
      } finally { setLoading(false); }
    })();
  }, [page]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const goalPct = user?.goal_amount > 0
    ? Math.min(Math.round(((stats?.total_raised || 0) / user.goal_amount) * 100), 100)
    : 0;

  if (loading) return (
    <div className="page-wrapper"><DashboardSkeleton /></div>
  );

  return (
    <div className="page-wrapper space-y-8 animate-fade-in">

      {/* ── Page header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Welcome back, {user?.full_name?.split(" ")[0]} 👋
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link to={`/u/${user?.username}`} target="_blank">
            <AppButton variant="secondary" size="sm" icon={ExternalLink}>
              View page
            </AppButton>
          </Link>
          <Link to="/edit-profile">
            <AppButton size="sm" icon={Edit2}>
              Edit profile
            </AppButton>
          </Link>
        </div>
      </div>

      {/* ── Profile link strip ── */}
      <div className="card card-body flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-sky-50 border-sky-100">
        <div className="flex-1 min-w-0">
          <p className="text-2xs font-semibold text-sky-600 uppercase tracking-widest mb-0.5">
            Your support page
          </p>
          <p className="text-sm font-medium text-sky-700 truncate">{profileUrl}</p>
        </div>
        <AppButton
          variant="secondary"
          size="sm"
          icon={copied ? Check : Copy}
          onClick={handleCopy}
          className="shrink-0 border-sky-200 text-sky-700 hover:bg-sky-100"
        >
          {copied ? "Copied!" : "Copy link"}
        </AppButton>
      </div>

      {/* ── Stats grid ── */}
      <SectionContainer title="Overview" subtitle="Your all-time performance">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total raised"
            value={formatCurrency(stats?.total_raised || 0)}
            sub="All time"
            icon={TrendingUp}
            accent="sky"
            trend="up"
            trendLabel="Lifetime earnings"
          />
          <StatCard
            label="Supporters"
            value={stats?.total_supporters || 0}
            sub={`${stats?.donation_count || 0} donations · ${stats?.coffee_count || 0} coffees`}
            icon={Users}
            accent="violet"
          />
          <StatCard
            label="Donations"
            value={formatCurrency(stats?.donation_total || 0)}
            sub={`${stats?.donation_count || 0} received`}
            icon={Heart}
            accent="rose"
          />
          <StatCard
            label="Coffee tips"
            value={formatCurrency(stats?.coffee_total || 0)}
            sub={`${stats?.total_cups || 0} cups`}
            icon={Coffee}
            accent="amber"
          />
        </div>
      </SectionContainer>

      {/* ── Goal progress ── */}
      {user?.goal_amount > 0 && (
        <AppCard>
          <CardHeader
            title={user.goal_title || "Funding goal"}
            subtitle={`${formatCurrency(stats?.total_raised || 0)} raised of ${formatCurrency(user.goal_amount)}`}
            action={
              <span className="text-lg font-bold text-sky-600">{goalPct}%</span>
            }
          />
          <CardBody>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${goalPct}%` }} />
            </div>
            {goalPct >= 100 && (
              <p className="text-xs text-green-600 font-medium mt-2">🎉 Goal reached!</p>
            )}
          </CardBody>
        </AppCard>
      )}

      {/* ── Recent transactions ── */}
      <SectionContainer title="Recent transactions" subtitle="Latest support you've received">
        <AppCard>
          {transactions.length === 0 ? (
            <EmptyState
              icon={Clock}
              title="No transactions yet"
              description="When someone donates or buys you a coffee, it'll show up here."
            />
          ) : (
            <div className="divide-y divide-gray-50">
              {transactions.map((txn) => (
                <div key={txn.id}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors">
                  <Avatar name={txn.donor_name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{txn.donor_name}</p>
                    <p className="text-xs text-gray-400">
                      {txn.type === "coffee"
                        ? `Bought ${txn.cups} coffee${txn.cups > 1 ? "s" : ""}`
                        : "Made a donation"
                      } · {formatDate(txn.created_at)}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(txn.amount)}
                    </p>
                    <span className={txn.type === "coffee" ? "badge-amber" : "badge-sky"}>
                      {txn.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AppCard>

        {/* Pagination */}
        {total > 20 && (
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-gray-400">
              Showing {Math.min(page * 20, total)} of {total}
            </p>
            <div className="flex gap-2">
              <AppButton variant="secondary" size="sm" onClick={() => setPage(p => p - 1)} disabled={page <= 1}>
                Previous
              </AppButton>
              <AppButton variant="secondary" size="sm" onClick={() => setPage(p => p + 1)} disabled={page * 20 >= total}>
                Next
              </AppButton>
            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  );
}