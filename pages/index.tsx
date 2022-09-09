import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SearchFilled as SearchIcon } from "@fluentui/react-icons";
import { Center, Input } from '@chakra-ui/react';
import { Client } from '../util/stats';
import { useState } from 'react';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{
    id: string;
    name: string;
    avatar: string;
  }[]>([]);
  async function searchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    const r = await Client.findByUsername(e.target.value)
    setResults(r)
  }

  return (
    <div className="container">
      <Center className="main">
        <h1 className="text-5xl font-bold">
          <SearchIcon /> Search for Players
        </h1>
        <Input onChange={searchValue} className="searchInput mt-10" width="500px"/>
        <div className="results">
          {results.map(result => (
            <div className="result" key={result.id}>
              <Image src={result.avatar} alt={result.name} width="100px" height="100px" />
              <div className="name">{result.name}</div>
            </div>
          ))}
        </div>
      </Center>
    </div>
  )
}

export default Home
