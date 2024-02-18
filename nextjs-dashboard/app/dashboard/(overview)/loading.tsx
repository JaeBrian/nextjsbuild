import DashboardSkeleton from '../../ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}

//uses suspense which means, it waits for the data to be available until it renders.
