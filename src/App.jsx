// goals
// have an edit button
// have a delete button
// have a filter to filer and see : All tasks, completed tasks, and uncompleted tasks,

import TaskManagement from "./components/TaskManagement"

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex 
      justify-center py-3">
        <TaskManagement />
      </div>
    </>
  )
}

export default App