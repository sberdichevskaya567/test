import './App.css'
import MainPage from "./page/index.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterProvider } from "./page/component/filter/components/filter-context.jsx"

const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={ queryClient }>
            <div className='min-h-[100vh] flex flex-col justify-between'>
                <FilterProvider>
                    <div className='pt-[30px] grow w-[100%] m-auto pb-20'>
                        <MainPage/>
                    </div>
                </FilterProvider>
            </div>
        </QueryClientProvider>
    )
}

export default App
