import { Card, Metric, Text, DonutChart, Title } from "@tremor/react";

import barbieData from "./movie-barbie.json";
import oppenheimerData from "./movie.oppenheimer.json";

// function to add comma to our figures
const addCommas = (number) => {
  // Convert the number to a string
  let numString = number.toString();

  // Use regex to add commas to the string representation of the number
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return numString;
};

function App() {
  return (
    <div className="grid grid-cols-2 gap-12 px-7">
      <div>
        <h2 className="text-2xl font-bold mb-6">Barbie</h2>
        <div className="grid grid-cols-2 gap-12">
          <img src={barbieData.poster_path} />
          <div>
            <div>
              <Title>User Rating</Title>
              <DonutChart
                className="mt-6 mb-8 text-xl font-bold w-24 h-24"
                data={[
                  {
                    name: false,
                    userScore: barbieData.vote_average,
                  },
                  {
                    name: false,
                    userScore: 10 - barbieData.vote_average,
                  },
                ]}
                category="userScore"
                index="name"
                colors={["green", "slate"]}
                label={`${(barbieData.vote_average * 10).toFixed()}%`}
              />
            </div>

            <Card
              className="mx-auto max-w-xs mb-6"
              decoration="top"
              decorationColor="indigo"
            >
              <Text>Revenue</Text>
              <Metric>$ {addCommas(barbieData.global_revenue)}</Metric>
            </Card>
            <Card
              className="mx-auto max-w-xs"
              decoration="top"
              decorationColor="indigo"
            >
              <Text>Budget</Text>
              <Metric>$ {addCommas(barbieData.budget)}</Metric>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Oppenheimer</h2>
        <div className="grid grid-cols-2 gap-12">
          <img src={oppenheimerData.poster_path} />
          <div>
            <div>
              <Title>User Rating</Title>
              <DonutChart
                className="mt-6 mb-8 text-xl font-bold w-24 h-24"
                data={[
                  {
                    name: false,
                    userScore: oppenheimerData.vote_average,
                  },
                  {
                    name: false,
                    userScore: 10 - oppenheimerData.vote_average,
                  },
                ]}
                category="userScore"
                index="name"
                colors={["green", "slate"]}
                label={`${(oppenheimerData.vote_average * 10).toFixed()}%`}
              />
            </div>

            <Card
              className="mx-auto max-w-xs mb-6"
              decoration="top"
              decorationColor="indigo"
            >
              <Text>Revenue</Text>
              <Metric>$ {addCommas(oppenheimerData.global_revenue)}</Metric>
            </Card>
            <Card
              className="mx-auto max-w-xs"
              decoration="top"
              decorationColor="indigo"
            >
              <Text>Budget</Text>
              <Metric>$ {addCommas(oppenheimerData.budget)}</Metric>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
