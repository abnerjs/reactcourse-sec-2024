import { Dialog } from '@radix-ui/react-dialog'
import CreateGoal from './components/CreateGoal'
import Summary from './components/Summary'
// import EmptyGoals from './components/EmptyGoals'

function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}

      <Summary />

      <CreateGoal />
    </Dialog>
  )
}

export default App
