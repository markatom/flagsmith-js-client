import type { NextPage } from 'next'
import { useFlagsmith } from 'flagsmith-es/react';
import { parseCookies } from 'nookies';

const Home: NextPage = () => {
  const flagsmith = useFlagsmith()
  return (
      <div className="App">
        <p>flagsmith identity: {flagsmith.identity}</p>
        <p>cookies identity: {parseCookies().identity}</p>
      </div>
  );
}

export default Home
