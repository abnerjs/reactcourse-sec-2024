import { Dialog } from '@radix-ui/react-dialog'
import CreateGoal from './components/CreateGoal'
import Summary from './components/Summary'
import EmptyGoals from './components/EmptyGoals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/getSummary'

function App() {
  // const [summary, setSummary] = useState<SummaryResponse | null>(null)

  // useEffect(() => {
  //   fetch('http://localhost:3000/summary')
  //     .then((response) => response.json())
  //     .then((data) => setSummary(data.summary))
  // }, [summary])
  const { data } = useQuery(['summary'], getSummary)

  return (
    <Dialog>
      {data?.total ?? false ? <Summary data={data} /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}

export default App
