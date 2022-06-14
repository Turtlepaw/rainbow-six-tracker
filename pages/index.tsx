import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SearchFilled as SearchIcon } from "@fluentui/react-icons";
import { Center, Input } from '@chakra-ui/react';
import { Client } from '../util/stats';
import { useState } from 'react';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <Center className="main">
        <h1 className="text-5xl font-bold">
          <SearchIcon /> Search for Players
        </h1>
        <Input onChange={e => setSearch(e.target.value)} className="searchInput mt-10" width="500px"/>
      </Center>
    </div>
  )
}

export default Home
