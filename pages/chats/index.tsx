import Layout from '@components/layout';

export default function Chats() {
    return (
    <Layout title={"채팅"} hasTabBar>
    <div className="py-4 divide-y-[1px]">
    {[...Array(10)].map((_, i) => (
        <div
        key={i}
        className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
        <div className="w-12 h-12 rounded-full bg-slate-300" />
        <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
            See you tomorrow in the corner at 2pm!
            </p>
        </div>
        </div>
    ))}
    </div>
    </Layout>
    );
}