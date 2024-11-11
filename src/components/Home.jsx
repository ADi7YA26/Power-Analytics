import AppCard from "./AppCard"

const Home = () => {
    return (
        <main>
            <h1 className="p-5 font-bold text-2xl">Dashboard</h1>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <AppCard title="fans" n1="32" n2="920" />
                    <AppCard title="fans" n1="32" n2="920" />
                    <AppCard title="fans" n1="32" n2="920" />
                    <AppCard title="fans" n1="32" n2="920" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
        </main>
    )
}

export default Home