import { Card, ProgressBar } from "@tremor/react";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Card className="mx-auto max-w-md">
          <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </h4>
          <p className="text=tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            $71,389
          </p>
          <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <span>32% of annual target</span>
            <span>$225,738</span>
          </p>
          <ProgressBar value={32} className="mt-2" />
        </Card>
      </div>
    </>
  );
}

export default App;
